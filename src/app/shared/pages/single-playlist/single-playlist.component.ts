import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { CREATE_PLAYLIST } from 'src/app/core/types/Playlist.types';
import { PLAYLIST } from 'src/app/core/types/Playlist.types';
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';
import { MediaFileModalComponent } from '../../components/media-file-modal/media-file-modal.component'
import {MatDialog} from '@angular/material/dialog';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
import * as Sortable from 'sortablejs';
import { AssignKeyComponent } from '../../components/assign-key/assign-key.component';
import { DurationModalComponent } from '../../components/duration-modal/duration-modal.component';
@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.component.html',
  styleUrls: ['./single-playlist.component.scss']
})
export class SinglePlaylistComponent implements OnInit {
  playlist_id: string = '';
  playlist_data: PLAYLIST;
  contents: any[] = [];
  mediaFiles: any[] = [];
  playlist_contents : any;
  updated_playlist: any[] = [];
  playlist_preparing : boolean;

  constructor(
              public dialog: MatDialog,
              private _mediaFiles: MediaFileService,
              private _router: ActivatedRoute, 
              private _playlist: PlaylistService) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(
      (data: any) => {
        this.playlist_id = data.params.id;
        this.getPlaylistData();
      }
    )
  }

  getPlaylistData() {
    this.playlist_preparing = true;
    this._playlist.get_playlist_page(this.playlist_id).subscribe(
     (data: PLAYLIST) => {
       this.playlist_data = data;
       this.playlist_preparing = false;
       console.log('#PLAYLIST DATAss', this.playlist_data)
     }
    )
  }

  //MEDIA FILES
  getMediaFiles() {
    this._mediaFiles.get_mediaFiles().subscribe(
      (data: any) =>  {
        this.mediaFiles = data;
        console.log('#MEDIA FILES', this.mediaFiles)
      }
    )
  }

  //MODAL
  openDialog() {
    const dialogRef = this.dialog.open(MediaFileModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.contents = result;
      
      if(result && result.length > 0){
        this.playlist_data.contents.push(...result)
      }
    });
  }
  
  saveOrder() {
    console.log('afsdf', this.playlist_data.contents)
    this._playlist.update_playlist_contents(this.playlist_data).subscribe(
      (data: any) => {
        
        alert(data.msg)
        this.getPlaylistData()
      },
      error => {
        console.log(error)
      }
    )
  }

  openMediaInfo(file : any) {
    console.log('OPENMEDIAINFO', file)
    const dialogRef = this.dialog.open(DurationModalComponent, {
      data: {file, playlist_id : this.playlist_id}});
    console.log('DURATION',this.playlist_data, file)
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      if(result == 1){
        this.getPlaylistData();
      }
      
    });
  }


  //DELETE
  deleteContent(data : any) {
    console.log(this.playlist_id, data)
    if(confirm("Are you sure you want to delete this content?")) {
      this._playlist.delete_playlist_content(this.playlist_id, data).subscribe(
        (data : any) => {
          alert('CONTENT DELETED')
          this.getPlaylistData()
        }
      )
    }
  }

}

