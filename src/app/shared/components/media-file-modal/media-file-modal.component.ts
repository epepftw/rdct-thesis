import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io } from "socket.io-client";
import * as filestack from 'filestack-js'
// ENVIRONMENT AND SERVICES
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service'
// TYPES
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';
import { UPLOADED_FILE } from 'src/app/core/types/Filestack.types';

@Component({
  selector: 'app-media-file-modal',
  templateUrl: './media-file-modal.component.html',
  styleUrls: ['./media-file-modal.component.scss']
})
export class MediaFileModalComponent implements OnInit {
  filestack_client: any;
  mediaFiles: any[] = [];
  socket: any;

  constructor(
    private _mediaFiles: MediaFileService,
    private _auth: AuthService) {
      this.filestack_client = filestack.init(environment.filestackAPI)
     }

  ngOnInit(): void {
    this.getMediaFiles();
  }


  getMediaFiles() {
    this._mediaFiles.get_mediaFiles().subscribe(
      (data: any) =>  {
        this.mediaFiles = data;
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
