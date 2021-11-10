import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';

@Component({
  selector: 'app-playlist-content-table',
  templateUrl: './playlist-content-table.component.html',
  styleUrls: ['./playlist-content-table.component.scss']
})
export class PlaylistContentTableComponent implements OnInit {

  @Input() filename: any = '';
  @Input() file_url: any = '';

  constructor(
    private _playlist: PlaylistService
  ) { }

  ngOnInit(): void {
  }
}
