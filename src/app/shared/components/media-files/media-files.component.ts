import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-files',
  templateUrl: './media-files.component.html',
  styleUrls: ['./media-files.component.scss']
})
export class MediaFilesComponent implements OnInit {

  @Input() filename: any = '';
  @Input() file_url: any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
