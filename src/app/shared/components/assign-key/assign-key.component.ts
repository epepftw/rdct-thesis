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

@Component({
  selector: 'app-assign-key',
  templateUrl: './assign-key.component.html',
  styleUrls: ['./assign-key.component.scss']
})
export class AssignKeyComponent implements OnInit {
  
  myControl = new FormControl();
  options : PLAYLIST[] = []; 
  keys: Keys[] = []; 
  selected_playlist : PLAYLIST;
  playlist_form! : FormGroup;
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
    @Inject(MAT_DIALOG_DATA) public key_id: string
    ) { 
    }

  ngOnInit(): void {
    this.getPlaylist();

    this.playlist_form = this._form.group(
      {
        playlist_id :['', Validators.required],
        playlist_name: ['', Validators.required]
      }
    )


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    
    this.filteredOptions.subscribe((data : any[]) => {
      if (data.length > 0) {
        // console.log(data[0])

        this.playlist_form.controls['playlist_name'].setValue(data[0].playlist_name);
        this.playlist_form.controls['playlist_id'].setValue(data[0]._id);
      }
    }); 
    
  } 

  displayFn(user: any): string {
    return user && user.playlist_name ? user.playlist_name : '';
  }

  private _filter(playlist_name: string): any[] {
    console.log("#FILTERED playlist_name",playlist_name)
    const filterValue = playlist_name.toLowerCase();

    this.options.filter(option => {
      
      console.log('$Filtered Values',option.playlist_name.toLowerCase().includes(filterValue))
    })

    return this.options.filter(option => option.playlist_name.toLowerCase().includes(filterValue));
  }


  getPlaylist() {
    this._playlist.get_userPlaylist(this._auth.getCurrentUser().user._id).subscribe(
      (data: PLAYLIST[]) => {
        this.options = data;
        console.log("#Playlist", this.options)
      }
    )
  }


  onFormSubmit() {
    console.log(this.playlist_form.get('playlist_name').value)
    console.log(this.playlist_form.get('playlist_id').value)
    console.log(this.keys);

    const payload = {
      _id: this.key_id,
      assignedPlaylist: {
        playlistId: this.playlist_form.get('playlist_id').value,
        playlistName: this.playlist_form.get('playlist_name').value
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