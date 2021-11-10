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

    get_playlist_page(playlistId : string): Observable<any>{
      return this._http.get<any>(`${environment.base_api}${environment.get.playlist}/${playlistId}`, this.header )
    }

    update_playlist_contents(data : any): Observable<any>{
      return this._http.put<any>(`${environment.base_api}${environment.put.update}`, data, this.header )
    }

    get_userPlaylist(userId : string): Observable<any> {
      return this._http.get<any>(`${environment.base_api}${environment.get.playlist_by_userId}?userId=${userId}`, this.header)
    }

    delete_playlist_content(playlist_id: string, playlist_content_id: string) : Observable<any>{
      const to_delete = {
        playlist_id, 
        playlist_content_id
      }
      return this._http.post(`${environment.base_api}${environment.delete.delete_playlist_content}`, to_delete, this.header)
    }
  
}
