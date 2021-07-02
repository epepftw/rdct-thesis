import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private _http: HttpClient) { }

  get_users() {
    return this._http.get(`${environment.api}${environment.get.users}`)
  }

  get_user_profile() {
    return this._http.get(`${environment.base_api}${environment.get.users_profile}`)
  }
}