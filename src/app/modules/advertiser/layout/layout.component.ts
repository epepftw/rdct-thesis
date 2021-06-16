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
      label: "Media Files",
      link: "media"
    },
    {
      label: "Playlist",
      link: "playlist"
    },
    {
      label: "Templates",
      link: "template"
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
