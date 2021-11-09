 import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-table',
  templateUrl: './playlist-table.component.html',
  styleUrls: ['./playlist-table.component.scss']
})
export class PlaylistTableComponent implements OnInit {

  @Input() title: any = '';
  @Input() column_title: any = '';
  @Input() data: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
