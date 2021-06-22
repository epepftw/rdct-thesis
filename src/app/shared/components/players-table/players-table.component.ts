import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.scss']
})
export class PlayersTableComponent implements OnInit {

  @Input() title: any = '';
  @Input() column_title: any = '';
  @Input() data: any = '';


  constructor() { }

  ngOnInit(): void {
  }

  // Api call for administrator


 // Api call for advertiser

}
