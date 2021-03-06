import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInformation } from '../../types/UserRegister';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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


	  // GET
  get_users() {
    return this._http.get(`${environment.base_api}${environment.get.users}`, this.header);
  }

  get_user_info(userId : string): Observable<any>{
	return this._http.get<any>(`${environment.base_api}${environment.get.users}/${userId}`, this.header)
  }

  register_user(data: UserInformation): Observable<any> {
    return this._http.post(`${environment.base_api}${environment.post.register}`, data, this.header)
  }
}
