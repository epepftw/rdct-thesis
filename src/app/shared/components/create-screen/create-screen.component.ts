import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TemplateService } from 'src/app/core/services/template/template.service';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { PLAYLIST } from 'src/app/core/types/Playlist.types';
import { TEMPLATE_TYPE } from 'src/app/core/types/Template.types'


@Component({
  selector: 'app-create-screen',
  templateUrl: './create-screen.component.html',
  styleUrls: ['./create-screen.component.scss']
})
export class CreateScreenComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  template: any[] = [];
  selected_template: any[] = [];
  myControl = new FormControl();
  playlistOptions: PLAYLIST[] = [];

  constructor(
    private _form: FormBuilder,
    private _template: TemplateService,
    private _playlist: PlaylistService
  ) { }

  ngOnInit(): void {
    this.getTemplates();
    this.firstFormGroup = this._form.group(
      {
        screen_name: ['', Validators.required]
      }
    )
  }

  getTemplates() {
    this._template.get_template().subscribe(
      (data : any) => {
        this.template = data;
        console.log('HAIi',this.template)
      }
    )
  }

  onSelectTemplate(data : any) {

  }
}
