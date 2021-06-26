import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  navLinks = [
    {
      label: "Dashboard",
      icon: "fas fa-columns",
      link: "dashboard"
    },
    {
      label: "Media Files",
      icon: "fas fa-photo-video",
      link: "media"
    },
    {
      label: "Playlist",
      icon: "fas fa-play",
      link: "playlist"
    },
    {
      label: "Templates",
      icon: "fas fa-object-group",
      link: "template"
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
