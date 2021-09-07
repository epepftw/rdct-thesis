import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { CREATE_PLAYLIST } from 'src/app/core/types/Playlist.types';
import { PLAYLIST } from 'src/app/core/types/Playlist.types';
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';

@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.component.html',
  styleUrls: ['./single-playlist.component.scss']
})
export class SinglePlaylistComponent implements OnInit {
  playlist_id: string;
  playlist_data: PLAYLIST;

  constructor(private _router: ActivatedRoute, 
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
}
