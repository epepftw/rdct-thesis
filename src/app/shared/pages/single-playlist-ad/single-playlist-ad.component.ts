import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { CREATE_PLAYLIST } from 'src/app/core/types/Playlist.types';
import { PLAYLIST } from 'src/app/core/types/Playlist.types';
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';
import {MatDialog} from '@angular/material/dialog';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
import * as Sortable from 'sortablejs';
import { AssignKeyComponent } from '../../components/assign-key/assign-key.component';
import { MediaFileModalAdComponent } from '../../components/media-file-modal-ad/media-file-modal-ad.component';
@Component({
  selector: 'app-single-playlist-ad',
  templateUrl: './single-playlist-ad.component.html',
  styleUrls: ['./single-playlist-ad.component.scss']
})
export class SinglePlaylistAdComponent implements OnInit {
  playlist_id: string;
  playlist_data: PLAYLIST;
  contents: any[] = [];
  mediaFiles: any[] = [];
  playlist_contents : any;
  updated_playlist: any[] = [];

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
    this._playlist.get_playlist_page(this.playlist_id).subscribe(
     (data: PLAYLIST) => {
       this.playlist_data = data;
       console.log('#PLAYLIST DATA', this.playlist_data)
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
    const dialogRef = this.dialog.open(MediaFileModalAdComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.contents = result;
      
      if(result && result.length > 0){
        this.playlist_data.contents.push(...result)
      }
    });
  }

  openAssignee() {
    const dialogRef = this.dialog.open(AssignKeyComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result : ${result}`);
    });
  }
  
  saveOrder() {
    console.log('afsdf', this.playlist_data.contents)
    this._playlist.update_playlist_contents(this.playlist_data).subscribe(
      (data: any) => {
        this.getPlaylistData()
        alert(data.msg)
      },
      error => {
        console.log(error)
      }
    )
  }

}

