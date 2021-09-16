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
  options : any[] = []; 
  keys: any[] = []; 
  key_gen_form! : FormGroup;
  selected_name : string;
  filteredOptions: Observable<any[]>;

  constructor(
    private _users: UserService,
    private _formBuilder: FormBuilder,
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


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    
    this.filteredOptions.subscribe((data : any[]) => {
      if (data.length > 0) {
        this.key_gen_form.controls['name'].setValue(data[0]._id)
        console.log(data[0]._id)
      }
    }); 

   

      // this.myControl.valueChanges.subscribe()
  } 

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any[] {
    console.log("#FILTERED NAME",name)
    const filterValue = name.toLowerCase();

    this.options.filter(option => {
      
      console.log('$Filtered Values',option.name.toLowerCase().includes(filterValue))
    })

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }



  getUserName(){
    this._advertiser.get_advertisers().subscribe(
      (data : any) => {
        this.options = data;
        console.log('#adver_advertiser', this.options)
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
			this.key_gen_form.get('count').value,
      
		).subscribe(
			(res) => {
          alert(res.msg)
          window.location.reload();
          this.keys
			},
			(err) => {
				console.log('#ERROR', err)
         alert("No such Advertiser")
			}
		)
  }
}


// Subscribe(success, error)