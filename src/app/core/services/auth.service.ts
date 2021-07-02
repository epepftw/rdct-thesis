import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
////
import { UserCredentials, UsersAuthenticateAPI } from '../types/UserAuth';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	constructor(private _http: HttpClient) { }

	authenticate(userCredentials: UserCredentials): any {
		return this._http.post<any>(`${environment.base_api}${environment.authenticate}`, userCredentials);
	}

	isLoggedIn(): boolean {
		// Get Token from Local Storage
		const token = localStorage.getItem('token');

		// Check if Token exists then do the math else set payload to null
		const payload = token ? atob(token!.split('.')[1]) : null;

		console.log('TTTTTTTT', payload);
		
		const parsedPayload = payload ? JSON.parse(payload) : null;

		console.log('UUUUUUU', parsedPayload)
		
		return parsedPayload ? parsedPayload.exp > Date.now() / 1000 : false
	}

	isLoggedOut() {
		const token = localStorage.getItem('token');
		if (token) {
			return false;
		}
		return true;
	}

	logout(){

		localStorage.clear();
	}
}
