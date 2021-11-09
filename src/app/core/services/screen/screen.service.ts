import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { CREATE_SCREEN } from '../../types/Screen.types';


@Injectable({
  providedIn: 'root'
})
export class ScreenService {
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

    //GET
    get_screen(): Observable<any> {
      return this._http.get(`${environment.base_api}${environment.get.screen}`, this.header)
    }
    get_screen_byId(screenId : string): Observable<any> {
      return this._http.get(`${environment.base_api}${environment.get.screen}/${screenId}`, this.header)
    }

    //POST
    create_screen(data : CREATE_SCREEN): Observable<any> {
      return this._http.post<any>(`${environment.base_api}${environment.post.create_screen}`, data, this.header)
    }
}
