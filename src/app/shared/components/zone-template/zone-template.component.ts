import { Component, Input, OnInit } from '@angular/core';
import { ZONE_TYPE } from 'src/app/core/types/Zones.types';
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';

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
