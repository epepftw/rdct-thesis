import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { CREATE_TEMPLATE } from '../../types/Template.types';
import { CREATE_ZONE } from '../../types/Zones.types';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
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
    get_template(): Observable<any> {
      return this._http.get<any>(`${environment.base_api}${environment.get.template}`, this.header)
    }

    get_zone(): Observable<any> {
      return this._http.get<any>(`${environment.base_api}${environment.get.zone}`, this.header)
    }

    //POST
    create_template(data : CREATE_TEMPLATE): Observable<any> {
      return this._http.post<any>(`${environment.base_api}${environment.post.create_template}`, data, this.header)
    }
    create_zone(data : CREATE_ZONE): Observable<any> {
      return this._http.post<any>(`${environment.base_api}${environment.post.create_zone}`, data, this.header)
    }
}
