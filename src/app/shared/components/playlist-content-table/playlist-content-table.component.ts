import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { ImagePipe } from 'src/app/shared/pipes/image.pipe';

@Component({
  selector: 'app-playlist-content-table',
  templateUrl: './playlist-content-table.component.html',
  styleUrls: ['./playlist-content-table.component.scss'],
  providers: [ImagePipe]
})
export class PlaylistContentTableComponent implements OnInit {

  @Input() filename: any = '';
  @Input() file_url: any = '';
  @Input() mimetype: any = '';

  constructor(
    private _playlist: PlaylistService,
    private _image : ImagePipe
  ) { }

  ngOnInit(): void {
  }
}
