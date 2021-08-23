import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from 'src/app/core/services/user/user.service';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';

import { CREATE_PLAYLIST } from 'src/app/core/types/playlist.types';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';



export interface User {
  name: string;
}

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {
  isLinear = false;
  user_name: any[] = [];
  keys: any
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  //   
  myControl = new FormControl();
  options: User[] = [];
  filteredOptions: Observable<User[]>;
//
  constructor(
    private _formBuilder: FormBuilder,
    private _users: UserService,
    private _keys: UserKeysService,
    private _playlist: PlaylistService,) { }

  ngOnInit(): void {
    this.getUsers();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    // 
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  //
  getUsers() {
    this._users.get_users().subscribe(
      (data: any) =>  {
        this.options = data;
        console.log('#USERS', this.options)
      }
    )
  }
}
