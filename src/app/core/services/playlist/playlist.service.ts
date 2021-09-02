import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { CREATE_PLAYLIST } from '../../types/Playlist.types';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
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

    get_playlist(): Observable<any> {
      return this._http.get<any>(`${environment.base_api}${environment.get.playlist}`, this.header)
    }

    create_playlist(data: CREATE_PLAYLIST): Observable<any> {
      return this._http.post(`${environment.base_api}${environment.post.create_playlist}`, data, this.header)
    }
}
