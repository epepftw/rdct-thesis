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
      link: "dashboard"
    },
    {
      label: "Advertisers",
      link: "advertiser"
    },
    {
      label: "Media Files",
      link: "media"
    },
    {
      label: "Playlists",
      link: "playlist"
    },
    {
      label: "Templates",
      link: "template"
    },
    {
      label: "Users",
      link: "user"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
