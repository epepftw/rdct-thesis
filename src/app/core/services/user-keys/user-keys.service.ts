import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Keys } from '../../types/Keys.types';
import { PLAYLIST } from '../../types/Playlist.types';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserKeysService {
  current_user: any = this._auth.getCurrentUser();
	header: any;

  constructor(private _http: HttpClient,
              private _auth: AuthService) {
                console.log('CONSTRUCTOR', this.current_user);

                if (this.current_user) {
                  this.header = {
                    headers: new HttpHeaders()
                    .set('Authorization',  `${this.current_user.token}`)
                  }
                }
               }

  get_keys(): Observable<any> {
    return this._http.get<any>(`${environment.base_api}${environment.get.keys}`, this.header)
  }



  gen_keys(advertiserId : string, count : string): Observable<any> {
    console.log(advertiserId)
    return this._http.post(`${environment.base_api}${environment.post.gen_key}?advertiserId=${advertiserId}&count=${count}`, null, this.header)
  }    
  
  get_userKeys(userId : string): Observable<any> {
    return this._http.get<any>(`${environment.base_api}${environment.get.keys_by_userId}?userId=${userId}`, this.header)
  }

  get_key_page(keyId : string) : Observable<any> {
    return this._http.get<any>(`${environment.base_api}${environment.get.keys_by_keyId}?id=${keyId}`, this.header)
  }

  update_keys(keyData : any) : Observable<any> {
    return this._http.put(`${environment.base_api}${environment.put.update_key}`, keyData, this.header)
  }
}