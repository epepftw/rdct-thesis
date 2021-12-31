import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sidenavLinks: {label: string, icon: string, link: string}[] = [];
  current_user : any;
  constructor(
    private _authService:AuthService,
  ) {
    
   }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.current_user = this._authService.getCurrentUser().user.name
    console.log('#BITLOG',this.current_user)
  }
}
