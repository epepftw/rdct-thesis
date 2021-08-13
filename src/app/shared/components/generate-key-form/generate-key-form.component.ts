import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdvertiserService } from 'src/app/core/services/advertiser/advertiser.service'

@Component({
  selector: 'app-generate-key-form',
  templateUrl: './generate-key-form.component.html',
  styleUrls: ['./generate-key-form.component.scss']
})
export class GenerateKeyFormComponent implements OnInit {
  user_name : any[] = [];
  key_gen_form! : FormGroup;
  selected_name : string;

  @Input() test : String = '';

  constructor(
    private _users: UserService,
    private _advertiser: AdvertiserService,
    private _keys: UserKeysService,
    private _form: FormBuilder,
    private _dialog_ref: MatDialogRef<GenerateKeyFormComponent>
    ) { }

  ngOnInit(): void {
    this.getUserName();
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

  onGenKeyFormSubmit() {
		this._keys.gen_keys(
			this.key_gen_form.get('name').value, 
			this.key_gen_form.get('count').value
		).subscribe(
			(res) => {
        alert(res.msg)
        console.log(this._dialog_ref)
        this._dialog_ref.close();
			},
			(err) => {
				console.log('#ERROR', err)
			}
		)
  }
}


// Subscribe(success, error)