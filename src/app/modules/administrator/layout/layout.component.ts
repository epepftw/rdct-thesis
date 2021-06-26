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
      label: "Advertisers",
      icon: "fas fa-portrait",
      link: "advertiser"
    },
    {
      label: "Media Files",
      icon: "fas fa-photo-video",
      link: "media"
    },
    {
      label: "Playlists",
      icon: "fas fa-play",
      link: "playlist"
    },
    {
      label: "Templates",
      icon: "fas fa-object-group",
      link: "template"
    },
    {
      label: "Users",
      icon: "fas fa-users",
      link: "user"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
