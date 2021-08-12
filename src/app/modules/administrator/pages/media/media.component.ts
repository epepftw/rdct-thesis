import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
import * as filestack from 'filestack-js'
import { UPLOADED_FILE } from 'src/app/core/types/Filestack.types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  filestack_client: any;
  mediaFiles: any[] = [];

  card_data_sample: any = [
		{
			digit: 5120,
			description: "All Files"
		},
		{
			digit: 4521,
			description: "Images"
		},
		{
			digit: 599,
			description: "Videos"
		}
	]
  
  

  constructor(private _mediaFiles: MediaFileService) { 
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
            filename: string; file_url: string; uploaded_by: string;
          }[] = [];

          res.filesUploaded.map((item: UPLOADED_FILE) => {
            uploaded_file.push({
              filename: item.filename,
              file_url: item.url,
              uploaded_by: 'Efraim Gabuat'
            })
          })
  
          this.saveUploadedFileInfo(uploaded_file);
        }
      }
  
      this.filestack_client.picker(filestack_options).open();
    }
  
    saveUploadedFileInfo(data: { filename: string, file_url: string, uploaded_by: string }[]) {
      this._mediaFiles.save_uploaded_file(data).subscribe(
        data => {
          console.log(data)
        }, 
        error => {
          console.log('Error', error)
        }
      )
    }
  
}
