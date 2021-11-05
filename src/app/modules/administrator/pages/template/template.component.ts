import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/core/services/template/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  template: any[] = [];

  constructor(
    private _template: TemplateService
  ) { }

  ngOnInit(): void {
    this.get_template();
  }

  get_template() {
    this._template.get_template().subscribe(
      (data: any) => {
        this.template = data;
        console.log('HAIi',this.template);
      }
    )
  }

}
