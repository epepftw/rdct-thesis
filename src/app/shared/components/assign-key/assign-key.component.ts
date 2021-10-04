import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/core/services/user/user.service';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { Observable } from 'rxjs';
import { AdvertiserService } from 'src/app/core/services/advertiser/advertiser.service'
import { User } from 'src/app/core/types/User.types';

import { map, startWith } from 'rxjs/operators';
import { Keys } from 'src/app/core/types/Keys.types';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { PLAYLIST } from 'src/app/core/types/Playlist.types';

@Component({
  selector: 'app-assign-key',
  templateUrl: './assign-key.component.html',
  styleUrls: ['./assign-key.component.scss']
})
export class AssignKeyComponent implements OnInit {
  myControl = new FormControl();
  options : any[] = []; 
  keys: any[] = [];
  playlist_id: string;
  playlist_key_form! : FormGroup;
  selected_key: string;
  filteredOptions: Observable<any[]>;
  get_advertiser: User[];
  playlist: PLAYLIST;
  result: any;
  


  constructor(

    private _form: FormBuilder,
    private _keys: UserKeysService,
    private _advertiser: AdvertiserService,
    private _router: ActivatedRoute,
    private _playlist: PlaylistService
  ) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(
      (data: any) => {
        this.playlist_id = data.params.id;
        this.getPlaylistData();
      }
    )
    this.getKeys();
    this.playlist_key_form = this._form.group(
      {
        key: ['', Validators.required]
      }
    )

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.key),
      map(key => key ? this._filter(key) : this.keys.slice())
    );

    this.filteredOptions.subscribe((data : any[]) => {
      if (data.length > 0) {
       this.playlist_key_form.controls['key'].setValue(data[0].key); 
        console.log(data[0].key)
      }
    });
  }

  getPlaylistData() {
    this._playlist.get_playlist_page(this.playlist_id).subscribe(
     (data: PLAYLIST) => {
       this.playlist = data;
       console.log('#PLAYLIST DATA', this.playlist)
     }
    )
  }


  displayFn(keys : Keys): string {
    return keys && keys.key ? keys.key : '';    
  }
  
  
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    this.options.filter(option => {
      
      console.log('$Filtered Values',option.name.toLowerCase().includes(filterValue))
    })
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

 

  getKeys() {
    
  }
}
