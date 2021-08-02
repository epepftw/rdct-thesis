import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Roles } from '../../types/Role';
import { AuthService } from '../auth.service';

@Injectable({
	providedIn: 'root'
})

export class RoleService {
	current_user: any = this._auth.getCurrentUser();
	header: any;

	constructor(
		private _http: HttpClient,
		private _auth: AuthService
	) { 
		console.log('CONSTRUCTOR', this.current_user);

		if (this.current_user) {
			this.header = {
				headers: new HttpHeaders()
				.set('Authorization',  `${this.current_user.token}`)
			}
		}
	}

	getRoles(): Observable<any> {
		return this._http.get(`${environment.base_api}${environment.get.roles}`, this.header)
	}
}
