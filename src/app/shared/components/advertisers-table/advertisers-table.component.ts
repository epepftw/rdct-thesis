import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisers-table',
  templateUrl: './advertisers-table.component.html',
  styleUrls: ['./advertisers-table.component.scss']
})
export class AdvertisersTableComponent implements OnInit {

  @Input() title: any = '';
  @Input() column_title: any = '';
  @Input() data: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
