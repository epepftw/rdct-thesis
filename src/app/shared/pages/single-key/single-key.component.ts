import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute }from '@angular/router';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';
import { Keys } from 'src/app/core/types/Keys.types';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { AssignKeyComponent } from '../../components/assign-key/assign-key.component';
import { SCREEN } from 'src/app/core/types/Screen.types';
import { ScreenService } from 'src/app/core/services/screen/screen.service';

@Component({
  selector: 'app-single-key',
  templateUrl: './single-key.component.html',
  styleUrls: ['./single-key.component.scss']
})
export class SingleKeyComponent implements OnInit {
  key_id: string;
  key_data: Keys;
  screen: SCREEN[] = [];
  contents: any[] = [];


  constructor(
              public dialog: MatDialog,
              private _keys: UserKeysService,
              private _screen : ScreenService,
              private _router: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(
      (data: any) => {
        this.key_id = data.params.id;
        this.getKeyData();
        this.getScreen();
      }
    )
  }

  getKeyData() {
    this._keys.get_key_page(this.key_id).subscribe(
      (data: Keys) => {
        this.key_data = data;
        console.log('#KEY DATA',this.key_data)
      }
    )
  }

  getScreen(){
    this._screen.get_screen().subscribe(
      (data: any) => {
        this.screen = data;
        console.log('#screen DATA', this.screen)
      }
    )
  }

  //MODAL
  openDialog() {
    const dialogRef = this.dialog.open(
      AssignKeyComponent,
      {
        data: this.key_id
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.contents = result;
      
      if(result && result.length > 0){
        this.key_data.assignedPlaylist.push(...result)
      
      }
    });
  }
}
