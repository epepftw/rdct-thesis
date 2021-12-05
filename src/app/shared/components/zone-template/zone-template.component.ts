import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-template',
  templateUrl: './zone-template.component.html',
  styleUrls: ['./zone-template.component.scss']
})
export class ZoneTemplateComponent implements OnInit {

  @Input() zone : any;
  @Input() playlist : any;

  constructor() { }

  ngOnInit(): void {
  }

  
}
