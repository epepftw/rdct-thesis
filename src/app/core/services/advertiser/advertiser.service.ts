import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
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

  	get_advertisers() {
   		return this._http.get(`${environment.base_api}${environment.get.advertisers}`, this.header);
  	}
}
