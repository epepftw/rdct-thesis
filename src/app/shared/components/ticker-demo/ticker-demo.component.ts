import { Component, Input, OnInit } from '@angular/core';
import { TICKER } from 'src/app/core/types/MediaFile.types';

@Component({
  selector: 'app-ticker-demo',
  templateUrl: './ticker-demo.component.html',
  styleUrls: ['./ticker-demo.component.scss']
})
export class TickerDemoComponent implements OnInit {

  @Input() data : any;
  @Input() is_single_demo: boolean; 

  constructor() { }

  ngOnInit(): void {
  }

}
