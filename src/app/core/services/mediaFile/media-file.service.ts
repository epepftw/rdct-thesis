import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { TICKER, YTURL } from '../../types/MediaFile.types';


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

  get_userFiles(userId : string): Observable<any>{
    return this._http.get<any>(`${environment.base_api}${environment.get.mediaFiles_by_userId}?userId=${userId}`, this.header)
  }

  save_uploaded_file(data: any): Observable<any>{
    return this._http.post(`${environment.base_api}${environment.post.save_uploaded_file}`, data, this.header)
  }

  get_ticker(): Observable<any>{
    return this._http.get<any>(`${environment.base_api}${environment.get.ticker}`, this.header)
  }

  create_ticker(data : TICKER): Observable<any>{
    return this._http.post<any>(`${environment.base_api}${environment.post.create_ticker}`, data, this.header)
  }

  get_ticker_page(tickerId : string): Observable<any>{
    return this._http.get<any>(`${environment.base_api}${environment.get.ticker}/${tickerId}`, this.header )
  }

  get_youtubeUrl(): Observable<any>{
    return this._http.get<any>(`${environment.base_api}${environment.get.youtubeUrl}`, this.header)
  }

  add_youtubeUrl(data : YTURL): Observable<any>{
    return this._http.post<any>(`${environment.base_api}${environment.post.add_youtubeUrl}`, data, this.header)
  }

  get_youtubeUrl_page(tickerId : string): Observable<any>{
    return this._http.get<any>(`${environment.base_api}${environment.get.youtubeUrl}/${tickerId}`, this.header )
  } 
}
