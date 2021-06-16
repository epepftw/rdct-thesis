import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../core/services/auth.service';


@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router){}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		//Authentication and Authorization
		if(this.authService.isLoggedIn()){
			const role = localStorage.getItem('role');
			const role_json = role ? JSON.parse(role) : null;
			console.log(role_json)
			this.router.navigate([role_json.role_slug]); // user is logged in, go to the dashbord advertiser
			return false;
		}
        
        if (this.authService.isLoggedOut()) {
            return true;
        }

        return true;
	}
  
}
