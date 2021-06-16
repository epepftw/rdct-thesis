import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sidenavLinks: {label: string, link: string}[] = [];
  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.sidenavLinks)
  }
}
