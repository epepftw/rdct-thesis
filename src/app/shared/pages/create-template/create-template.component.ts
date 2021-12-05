import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {MatAccordion} from '@angular/material/expansion';


// Types
import { TEMPLATE_TYPE } from 'src/app/core/types/Template.types';
import { CreateZoneComponent } from '../../components/create-zone/create-zone.component';
import { CREATE_ZONE, ZONE_TYPE } from 'src/app/core/types/Zones.types';
import { CREATE_TEMPLATE } from 'src/app/core/types/Template.types';
import { TemplateService } from 'src/app/core/services/template/template.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  myControl = new FormControl();
  createTemplateForm : FormGroup;
  added_zone: any[] = [];
  contents: any[] = [];
  zones: CREATE_ZONE[] = [];
  template: CREATE_TEMPLATE;

  constructor(
    public dialog: MatDialog,
    private _form: FormBuilder,
    private _template: TemplateService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.createTemplateForm = this._form.group({
      name: ['', Validators.required]
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateZoneComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.contents = result;
      
      if(result){
        this.zones.push(result);
        console.log(this.zones)
        
      }
      
    });
  }

  onSave() {
    this._template.create_template( new CREATE_TEMPLATE(this.createTemplateForm.get('name').value, this.zones)).subscribe(
      (data: any) => {
        console.log('sccess',data)
        this._router.navigate(['/admin/template'])
      }
    )
  }

  removeZone(data : any){
    if (data !== -1) {
      this.zones.splice(data, 1)
    }
    console.log(this.zones[data])
  }
}
