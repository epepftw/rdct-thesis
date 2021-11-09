import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from 'src/app/core/services/user/user.service';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';
import { Observable } from 'rxjs';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
//
import { map, startWith } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { MediaFileModalAdComponent } from '../../components/media-file-modal-ad/media-file-modal-ad.component';
// TYPES
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';
import { UPLOADED_FILE } from 'src/app/core/types/Filestack.types';
import { CREATE_PLAYLIST } from 'src/app/core/types/Playlist.types'
import { AuthService } from 'src/app/core/services/auth.service';
export interface User {
  name: string;
}

@Component({
  selector: 'app-create-playlist-ad',
  templateUrl: './create-playlist-ad.component.html',
  styleUrls: ['./create-playlist-ad.component.scss']
})
export class CreatePlaylistAdComponent implements OnInit {
  formSubmitted: any;
  isLinear = true;
  user_name: any[] = [];
  mediaFiles: any[] = [];
  contents: any[] = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  //   
  myControl = new FormControl();
  options: User[] = [];
  filteredOptions: Observable<User[]>;
  created_playlist: any[] = [];
  date_created: string;
  uuid: string;
//
  constructor(
    public dialog: MatDialog,
    private _mediaFiles: MediaFileService,
    private _formBuilder: FormBuilder,
    private _form: FormBuilder,
    private _users: UserService,
    private _keys: UserKeysService,
    private _auth: AuthService,
    private _playlist: PlaylistService,
    private _router: Router) { }

  ngOnInit(): void {
    this.getMediaFiles();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.firstFormGroup = this._form.group(
      {
        playlist_name: ['', Validators.required],
      }
    )
  }

  getMediaFiles() {
    this._mediaFiles.get_userFiles(this._auth.getCurrentUser().user._id).subscribe(
      (data: any) =>  {
        this.mediaFiles = data;
        console.log('#MEDIA FILES', this.mediaFiles)
      }
    )
  }

  getPlaylist(){
    this._playlist.get_playlist().subscribe(
      (data: any) => {
        this.created_playlist = data;
        console.log('#CREATED PLAYLIST', this.created_playlist)
      }
    )
  }


  onFormSubmit() {
    
    console.log(this.firstFormGroup.get('playlist_name').value)
    
    const structuredPayload = new CREATE_PLAYLIST(this.firstFormGroup.get('playlist_name').value, this._auth.getCurrentUser().user._id, this._auth.getCurrentUser().user.name, this.date_created, this.contents, this.uuid)
    this._playlist.create_playlist(structuredPayload).subscribe(
      (data: CREATE_PLAYLIST) => {

        this._router.navigate(['/advertiser/playlist/', data._id])
      },
      error => {
        console.log(error)
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(MediaFileModalAdComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.contents = result;
      
      if(result && result.length > 0){
        this.onFormSubmit();
      }
      
    });
  }


}

