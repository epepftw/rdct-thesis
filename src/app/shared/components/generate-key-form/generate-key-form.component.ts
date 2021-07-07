import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-key-form',
  templateUrl: './generate-key-form.component.html',
  styleUrls: ['./generate-key-form.component.scss']
})
export class GenerateKeyFormComponent implements OnInit {
  @Input() test : String = '';
  @Input() rawdata : any = '';

  constructor() { }

  ngOnInit(): void {
  }

}
