import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from 'src/app/core/services/user/user.service';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { Observable } from 'rxjs';

import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-assign-key',
  templateUrl: './assign-key.component.html',
  styleUrls: ['./assign-key.component.scss']
})
export class AssignKeyComponent implements OnInit {
  keys: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
