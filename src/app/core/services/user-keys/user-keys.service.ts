import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserKeysService {

  constructor(private _http: HttpClient) { }

  get_keys() {
    return this._http.get(`${environment.api}${environment.get.keys}`)
  }
}
