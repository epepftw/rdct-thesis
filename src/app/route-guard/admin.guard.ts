import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
/////
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
  : boolean {
    
      if(!this.authService.isLoggedIn()){
        this.router.navigate(['/login']);
        return false;
      }

      if(this.authService.isLoggedIn()){
        const role = localStorage.getItem('role');
        const role_json = role ? JSON.parse(role) : null;
        if(role_json.role_slug !== 'admin'){
          this.router.navigate([role_json.role_slug]);
          return false;
        } 
      }

  

      return true;
  }
  
}
