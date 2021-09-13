import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import * as filestack from 'filestack-js'
// ENVIRONMENT AND SERVICES
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service'
// TYPES
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';
import { UPLOADED_FILE } from 'src/app/core/types/Filestack.types';
import { CREATE_PLAYLIST } from 'src/app/core/types/Playlist.types';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';

@Component({
  selector: 'app-media-file-modal',
  templateUrl: './media-file-modal.component.html',
  styleUrls: ['./media-file-modal.component.scss']
})

export class MediaFileModalComponent implements OnInit {
  filestack_client: any;
  mediaFiles: any[] = [];
  selected_files: any[] = [];
  created_playlist: any[] = [];
  media_contents: any[] = [];
  socket: any;

  // @Output() formSubmitted = new EventEmitter();

  constructor(
    private _mediaFiles: MediaFileService,
    private _playlist: PlaylistService,
    private _auth: AuthService) {
      this.filestack_client = filestack.init(environment.filestackAPI)
     }

  ngOnInit(): void {
    this.getMediaFiles();
    this.getPlaylist();
  }

  
  //GET FUNCTIONS START
  getMediaFiles() {
    this._mediaFiles.get_mediaFiles().subscribe(
      (data: any) =>  {
        this.mediaFiles = data;
        console.log('#MEDIA FILES', this.mediaFiles)
      }
    )
  }

  getPlaylist(){
    this._playlist.get_playlist().subscribe(
      (data: any) => {
        this.created_playlist = data;
        console.log('#CREATED PLAYLIST', this.created_playlist)
      }
    )
  } 
  //GET FUNCTIONS END

  // Function
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
  // Function
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
  // Function
  selectedFile(data: SAVE_FILE_INFO){
    if (this.selected_files.includes(data)) {
      
      this.selected_files = this.selected_files.filter(file => file._id !== data._id)
    } else {
      this.selected_files.push(data)
    }

    console.log(this.selected_files);
  }
  // Function
  isFileIncluded(data : any){
    return this.selected_files.includes(data)
  }
  // Function
  savePlaylist(data: CREATE_PLAYLIST) {
    this._playlist.create_playlist(data).subscribe(
      data => {
        console.log(data)
        this.getPlaylist();
      },
      error => {
        console.log('Error', error)
      }
    )
  } 
}