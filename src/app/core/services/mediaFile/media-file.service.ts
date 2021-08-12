import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class MediaFileService {
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

  get_mediaFiles(): Observable<any>{
    return this._http.get<any>(`${environment.base_api}${environment.get.mediaFiles}`, this.header)
  }

  save_uploaded_file(data: any): Observable<any>{
    return this._http.post(`${environment.base_api}${environment.post.save_uploaded_file}`, data, this.header)
  }
}
