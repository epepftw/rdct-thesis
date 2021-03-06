import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  current_user : any;
  constructor(
    private _authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  onLogoutClick(){
    this._authService.logout();
    this.router.navigate(['/login']);
    return false;
  }

  getCurrentUser(){
    this.current_user = this._authService.getCurrentUser().user.name
    console.log('#BITLOG',this.current_user)
  }
}
