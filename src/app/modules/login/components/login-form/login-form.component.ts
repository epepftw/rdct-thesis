import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { UserCredentials, UsersAuthenticateAPI } from '../../../../core/types/UserAuth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  login_form!: FormGroup;

	constructor(
		private _form: FormBuilder,
		private _auth: AuthService,
		private _router: Router
	) { }

	ngOnInit(): void {
		this.login_form = this._form.group(
			{
				username: ['', Validators.required],
				password: ['', Validators.required]
			}
		)
	}

	onLoginFormSubmit() {
		// @ts-ignore: Object is possibly 'null'.
		console.log(this.login_form.get('username').value)

		// @ts-ignore: Object is possibly 'null'.
		console.log(this.login_form.get('password').value)

		// @ts-ignore: Object is possibly 'null'.
		this._auth.authenticate(new UserCredentials(this.login_form.get('username').value, this.login_form.get('password').value)).subscribe(
			(data: UsersAuthenticateAPI) => {
				console.log(data);
				if (data.token) {
					localStorage.setItem('token', data.token)
					localStorage.setItem('role', JSON.stringify(data.role))
					this._router.navigate([data.role.role_slug])
				}

				if (!data.success) {
					alert('Wrong Password')
				}
			},
			(error: any) => {
				console.log(error)
			}
		)
	}
}
