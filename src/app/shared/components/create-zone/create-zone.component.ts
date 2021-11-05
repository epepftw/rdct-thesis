import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { TemplateService } from 'src/app/core/services/template/template.service';

import{ CREATE_ZONE } from 'src/app/core/types/Zones.types'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-zone',
  templateUrl: './create-zone.component.html',
  styleUrls: ['./create-zone.component.scss']
})
export class CreateZoneComponent implements OnInit {
  myControl = new FormControl();
  create_zone_form : FormGroup;
  backgroundColor: string = "#000000";
  zonePayload: any = "haiasd";

  constructor(
    private _form: FormBuilder,
    private _template: TemplateService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.create_zone_form = this._form.group(
      {
        zone_name: ['', Validators.required],
        background: ['', Validators.required],
        z_index: ['', Validators.required],
        height: ['', Validators.required],
        width: ['', Validators.required],
        position_x: ['', Validators.required],
        position_y: ['', Validators.required]
      }
    )
  }

  setSelectedColor(data: any): void {
    console.log(data.target.value)
    this.backgroundColor = data.target.value;
  }
}
