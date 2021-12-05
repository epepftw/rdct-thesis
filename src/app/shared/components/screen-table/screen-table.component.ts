import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screen-table',
  templateUrl: './screen-table.component.html',
  styleUrls: ['./screen-table.component.scss']
})
export class ScreenTableComponent implements OnInit {

  @Input() column_title: any = '';
  @Input() data: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
