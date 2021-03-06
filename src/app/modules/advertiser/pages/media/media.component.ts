import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
import * as filestack from 'filestack-js'
import { UPLOADED_FILE } from 'src/app/core/types/Filestack.types';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';
import { io } from "socket.io-client";
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  filestack_client: any;
  mediaFiles: any[] = [];
  socket: any;
  card_data_sample: any;
  
  

  constructor(
    private _mediaFiles: MediaFileService,
    private _auth: AuthService ) {  
                this.socket = io('http://localhost:3200')
                this.filestack_client = filestack.init(environment.filestackAPI)
              }

  ngOnInit(): void {
    this.getMediaFiles();
  }

  getMediaFiles() {
    this._mediaFiles.get_userFiles(this._auth.getCurrentUser().user._id).subscribe(
      (data: any) =>  {
        this.mediaFiles = data;
        this.card_data_sample = [
          {
            digit: this.mediaFiles.length,
            description: "All Files"
          },
          {
            digit: this.mediaFiles.filter((media: SAVE_FILE_INFO) => {
              return media.mimetype == 'image/jpeg' || media.mimetype == 'image/png'
            }).length,
            description: "Images"
          },
          {
            digit: this.mediaFiles.filter((media: SAVE_FILE_INFO) => {
              return media.mimetype == 'video/mp4'
            }).length,
            description: "Videos"
          }
        ]
        console.log('#MEDIA FILES', this.mediaFiles)
      }
    )
  }


    uploadContents() {
      console.log('Test',this._auth.getCurrentUser().user);
      const filestack_options = {
        accept: [
          'image/jpg',
          'image/jpeg',
          'image/png',
          'video/mp4'
        ],
        imageMax: [1280, 720],
        maxFiles: 10,
        onFileSelected: (e: any) => {
          console.log('onFilesSelected', e);
        },
        onUploadDone: (res: {filesUploaded: UPLOADED_FILE[], filesFailed: any[]}) => {
          console.log('onUploadDone', res);
  
          let uploaded_file: {
            filename: string;
            file_url: string;
            uploaded_by: string; 
            user_id: string;
            mimetype: string;
            size: number;
          }[] = [];

          res.filesUploaded.map((item: UPLOADED_FILE) => {
            uploaded_file.push({
              filename: item.filename,
              file_url: item.url,
              uploaded_by: this._auth.getCurrentUser().user.name,
              user_id: this._auth.getCurrentUser().user._id,
              mimetype: item.mimetype,
              size: item.size
  
            })
          })
          
          this.saveUploadedFileInfo(uploaded_file);
        }
      }
  
      this.filestack_client.picker(filestack_options).open();
    }
  
    pushContents() {
      this.socket.emit('pushUpdates');
    }

    saveUploadedFileInfo(data: SAVE_FILE_INFO[]) {
      this._mediaFiles.save_uploaded_file(data).subscribe(
        data => {
          console.log(data)
          this.getMediaFiles();
        }, 
        error => {
          console.log('Error', error)
        }
      )
    }
  
}
