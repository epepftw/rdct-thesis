import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CREATE_PLAYLIST } from 'src/app/core/types/Playlist.types';

@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.component.html',
  styleUrls: ['./single-playlist.component.scss']
})
export class SinglePlaylistComponent implements OnInit {
  playlist_id: string;
  playlist_data: CREATE_PLAYLIST;

  constructor(private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(
      (data: any) => {
        this.playlist_id = data.params.id;
        this.getPlaylistData();
      }
    )
  }

  getPlaylistData() {
    // this._playlist.getPlaylistDataById(this.playlist_id).subscribe(
    //   d => {
    //     this.playlist_data = d
    //   },
    //   e => {
    //     console.log(e)
    //   }
    // )
  }

}
