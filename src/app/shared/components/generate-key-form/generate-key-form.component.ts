import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdvertiserService } from 'src/app/core/services/advertiser/advertiser.service'
import { Keys } from 'src/app/core/types/Keys.types'
import {map, startWith} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-generate-key-form',
  templateUrl: './generate-key-form.component.html',
  styleUrls: ['./generate-key-form.component.scss']
})
export class GenerateKeyFormComponent implements OnInit {
  
  myControl = new FormControl();
  user_name : any[] = []; 
  keys: any[] = []; 
  key_gen_form! : FormGroup;
  selected_name : string;

  constructor(
    private _users: UserService,
    private _advertiser: AdvertiserService,
    private _keys: UserKeysService,
    private _form: FormBuilder
    ) { }

  ngOnInit(): void {

    this.getUserName();
    this.getKeys();
    this.key_gen_form = this._form.group(
      {
          name: ['', Validators.required],
          count: ['', Validators.required]
      }
    )
  } 



  getUserName(){
    this._advertiser.get_advertisers().subscribe(
      (data : any) => {
        this.user_name = data;
        console.log('#adver_advertiser', this.user_name)
      }
    )
  }

  getKeys() {
    this._keys.get_keys().subscribe(
      (data: Keys[]) => {
        this.keys = data;
        console.log("#Keys", this.keys)
      }
    )
  }

  onGenKeyFormSubmit() {
		this._keys.gen_keys(
			this.key_gen_form.get('name').value, 
			this.key_gen_form.get('count').value
		).subscribe(
			(res) => {
        alert(res.msg)
        window.location.reload();
        
			},
			(err) => {
				console.log('#ERROR', err)
			}
		)
  }
}


// Subscribe(success, error)