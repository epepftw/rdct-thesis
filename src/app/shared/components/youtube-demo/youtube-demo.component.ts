import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-demo',
  templateUrl: './youtube-demo.component.html',
  styleUrls: ['./youtube-demo.component.scss'],
})
export class YoutubeDemoComponent implements OnInit {

  @Input() youtube_data : any;
  @Input() is_single_demo: boolean; 

  constructor() { }

  ngOnInit(): void {
  }

}
