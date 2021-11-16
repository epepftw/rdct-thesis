import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdvertiserService } from 'src/app/core/services/advertiser/advertiser.service'
import { Keys } from 'src/app/core/types/Keys.types'
import {map, startWith} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { PLAYLIST } from 'src/app/core/types/Playlist.types';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { SCREEN } from 'src/app/core/types/Screen.types';
import { ScreenService } from 'src/app/core/services/screen/screen.service';

@Component({
  selector: 'app-assign-key',
  templateUrl: './assign-key.component.html',
  styleUrls: ['./assign-key.component.scss']
})
export class AssignKeyComponent implements OnInit {
  
  myControl = new FormControl();
  options : SCREEN[] = []; 
  keys: Keys[] = []; 
  selected_playlist : PLAYLIST;
  screen_form! : FormGroup;
  selected_name : string;
  filteredOptions: Observable<any[]>;
  

  constructor(
    private _users: UserService,
    private _playlist: PlaylistService,
    private _auth: AuthService,
    private _advertiser: AdvertiserService,
    private _keys: UserKeysService,
    private _router: ActivatedRoute,
    private _route: Router,
    private _form: FormBuilder,
    private _screen : ScreenService,
    @Inject(MAT_DIALOG_DATA) public key_id: string
    ) { 
    }

  ngOnInit(): void {
    this.getScreen();

    this.screen_form = this._form.group(
      {
        screen_id :['', Validators.required],
        screen_name: ['', Validators.required]
      }
    )


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.screen_name),
        map(screen_name => screen_name ? this._filter(screen_name) : this.options.slice())
      );
    
    this.filteredOptions.subscribe((data : any[]) => {
      if (data.length > 0) {
        // console.log(data[0])

        this.screen_form.controls['screen_name'].setValue(data[0].screen_name);
        this.screen_form.controls['screen_id'].setValue(data[0]._id);
        console.log('fckng', data[0])
      }
    }); 
    
  } 

  displayFn(user: any): string {
    return user && user.screen_name ? user.screen_name : '';
  }

  private _filter(screen_name: string): any[] {
    console.log("#FILTERED screen_name",screen_name)
    const filterValue = screen_name.toLowerCase();

    this.options.filter(option => {
      
      console.log('$Filtered Values',option.screen_name.toLowerCase().includes(filterValue))
    })

    return this.options.filter(option => option.screen_name.toLowerCase().includes(filterValue));
  }


  getScreen() {
    this._screen.get_screen().subscribe(
      (data: SCREEN[]) => {
        this.options = data;
        console.log("#Playlist", this.options)
      }
    )
  }


  onFormSubmit() {
    console.log(this.screen_form.get('screen_name').value)
    console.log(this.screen_form.get('screen_id').value)
    console.log(this.keys);

    const payload = {
      _id: this.key_id,
      assignedScreen: {
        screenId: this.screen_form.get('screen_id').value,
        screenName: this.screen_form.get('screen_name').value
      }
    }

    // Subscribe
    this._keys.update_keys(payload).subscribe(
      (data: any) => {
        console.log(data)
        alert('Playlist assigned successfully')
        window.location.reload()
      }
    )
 }
}

// Subscribe(success, error)