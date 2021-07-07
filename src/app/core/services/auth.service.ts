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
		return this._http.post<any>(`${environment.base_api}${environment.post.authenticate}`, userCredentials);
	}

	getCurrentUser() {
		let token = localStorage.getItem('token');
		let base64Url = token!.split('.')[1];
		let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
	
		return {
			user: JSON.parse(jsonPayload),
			token: token
		};
	}

	isLoggedIn(): boolean {
		// Get Token from Local Storage
		const token = localStorage.getItem('token');

		// Check if Token exists then do the math else set payload to null
		const payload = token ? atob(token!.split('.')[1]) : null;

		const parsedPayload = payload ? JSON.parse(payload) : null;
		
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
