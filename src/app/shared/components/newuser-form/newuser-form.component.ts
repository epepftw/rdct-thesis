import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from 'src/app/core/services/user/user.service';
import { Roles } from '../../../core/types/Role';

@Component({
  selector: 'app-newuser-form',
  templateUrl: './newuser-form.component.html',
  styleUrls: ['./newuser-form.component.scss']
})

export class NewuserFormComponent implements OnInit {
	@Input() current_role!: Roles;

	@Output() formSubmitted = new EventEmitter;

	admin_registration_form!: FormGroup;
	advertiser_registration_form!: FormGroup;

	admin_form_title: string = 'Administrator';
	advertiser_form_title: string = 'Advertiser';

	password_alert_message!: string;
	repassword_alert_message!: string;

	form_invalid: boolean = true;

	admin_form = [
		{
			label : "Enter Full Name",
			type : "text",
			name : "name",
			placeholder : "Full Name"
		},
		{
			label : "Enter Username",
			type : "text",
			name : "username",
			placeholder : "Username"
		},
		{
			label : "Enter your Email",
			type : "email",
			name : "email",
			placeholder : "Email address"
		},
		{
			label : "Enter Phone Number",
			type : "tel",
			name : "phone",
			placeholder : "+999xxxxx"
		},
		{
			label : "Enter Password",
			type : "password",
			name : "password",
			placeholder : "Password"
		},
		{
			label : "Confirm Password",
			type : "password",
			name : "re_type",
			placeholder : "Password"
		} 
	]

	advertiser_form = [
		{
			label : "Enter Full Name",
			type : "text",
			name : "name",
			placeholder : "Full Name"
		},
		{
			label : "Enter Username",
			type : "text",
			name : "username",
			placeholder : "Username"
		},
		{
			label : "Enter your Email",
			type : "email",
			name : "email",
			placeholder : "Email address"
		},
		{
			label : "Enter Phone Number",
			type : "tel",
			name : "phone",
			placeholder : "+999xxxxx"
		},
		{
			label : "Enter Address",
			type : "text",
			name : "address",
			placeholder : "Ex. LG 05 Royal Mansion, Wackwack Rd. Mandaluyong City"
		},
		{
			label : "Enter Password",
			type : "password",
			name : "password",
			placeholder : "Password"
		},
		{
			label : "Confirm Password",
			type : "password",
			name : "re_type",
			placeholder : "Password"
		} 
	]

	constructor(
		private _form: FormBuilder,
		private _router: Router,
		private _user: UserService
	) { }

	ngOnInit(): void {
		this.buildAdminRegisterForm();
		this.buildAdvertiserRegisterForm();

		
	}

	buildAdminRegisterForm() {
		this.admin_registration_form = this._form.group(
			{
				name: ['', Validators.required],
				username: ['', Validators.required],
				email: ['', Validators.required],
				phone: ['', Validators.required],
				password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
				re_type: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
				role_name: [this.current_role.role_name, Validators.required],
				role_id: [this.current_role._id, Validators.required],
			}
		)

		this.f.password.valueChanges.subscribe(
			data => {
				if (this.f.password.valid) {
					this.password_alert_message = "Password is Valid"
				} else {
					this.password_alert_message = "Password is Invalid"
				}
			}
		)

		this.f.re_type.valueChanges.subscribe(
			data => {
				if (this.f.password.value === this.f.re_type.value) {
					this.repassword_alert_message = "Password Match"
				} else {
					this.repassword_alert_message = "Password Does not Match"
				}
			}
		)

		this.admin_registration_form.valueChanges.subscribe(
			data => {
				console.log('haww',data)
				if (this.admin_registration_form.valid && this.f.password.value === this.f.re_type.value) {
					this.form_invalid = false;
				} else {
					this.form_invalid = true;
				}
			}
		)
	}

	buildAdvertiserRegisterForm() {
		this.advertiser_registration_form = this._form.group(
			{
				name: ['', Validators.required],
				username: ['', Validators.required],
				email: ['', Validators.required],
				phone: ['', Validators.required],
				address: ['', Validators.required],
				password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
				re_type: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
				role_name: [this.current_role.role_name, Validators.required],
				role_id: [this.current_role._id, Validators.required]
			}
		)

		this.v.password.valueChanges.subscribe(
			data => {
				if (this.v.password.valid) {
					this.password_alert_message = "Password is Valid"
				} else {
					this.password_alert_message = "Password is Invalid"
				}
			}
		)
		
		this.v.re_type.valueChanges.subscribe(
			data =>	{
				if (this.v.password.value === this.v.re_type.value) {
					this.repassword_alert_message = "Password Match"
				} else {
					this.repassword_alert_message = "Password Does not Match"
				}
			}
		)
		
		this.advertiser_registration_form.valueChanges.subscribe(
			data => {
				console.log('hawa',data)
				if (this.advertiser_registration_form.valid && this.v.password.value === this.v.re_type.value) {
					this.form_invalid = false;
				} else {
					this.form_invalid = true;
				}
			}
		)
	}

	get f() {
		return this.admin_registration_form.controls;
	}

	registerAdmin() {
		// @ts-ignore: Object is possibly 'null'.
		this.f.re_type.disable();


		console.log('hawaw',this.admin_registration_form.value);

		this._user.register_user(this.admin_registration_form.value).subscribe(
			(data: {success: boolean, msg: string}) => {
				alert(data.msg)
				
				if (!data.success) {
					this.f.re_type.enable();
				} else {
					this._router.navigate(['/admin/user'])
				}
			}, 
			error => {
				this.f.re_type.enable();
				console.log('hawawa',error);
			}
		)
	}


	get v() {
		return this.advertiser_registration_form.controls;
	}

	registerAdvertiser() {
		// @ts-ignore: Object is possibly 'null'.
		this.v.re_type.disable();

		console.log('hawawat',this.advertiser_registration_form.value);

		this._user.register_user(this.advertiser_registration_form.value).subscribe(
			(data: {success: boolean, msg: string}) => {
				alert(data.msg)
				this.formSubmitted.emit(this.advertiser_registration_form.value);
				if (!data.success) {

					this.v.re_type.enable();
				} else {
					this._router.navigate(['/admin/user'])
				}
			}, 
			error => {
				this.v.re_type.enable();
				console.log('haww',error);
			}
		)
	}




}
