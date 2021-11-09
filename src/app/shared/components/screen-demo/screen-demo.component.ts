import { Component, Input, OnInit } from '@angular/core';
import { SCREEN, SCREEN_TYPE } from 'src/app/core/types/Screen.types';

@Component({
  selector: 'app-screen-demo',
  templateUrl: './screen-demo.component.html',
  styleUrls: ['./screen-demo.component.scss']
})
export class ScreenDemoComponent implements OnInit {

  @Input() zone_playlist : SCREEN;

  constructor() { }

  ngOnInit(): void {
    console.log('#adasdasadadasd', this.zone_playlist)
  }


}
