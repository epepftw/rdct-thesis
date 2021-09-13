import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-content-table',
  templateUrl: './playlist-content-table.component.html',
  styleUrls: ['./playlist-content-table.component.scss']
})
export class PlaylistContentTableComponent implements OnInit {

  @Input() filename: any = '';
  @Input() file_url: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
