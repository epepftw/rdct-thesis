import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  search_results: any[] = [];
  search_key: string = "";
	searching: boolean = false;
  playlist: {
    playlist_name: string;
    date_created: string;
    playlist_owner: string;
    action: string;
  }[]


  card_data_sample: any = [
		{
			digit: 40,
			description: "Total Playlist(s)"
		},
		{
			digit: 23,
			description: "Active Playlist(s)"
		},
    {
			digit: 3,
			description: "New Playlist(s) this Week"
		}

	]

  table_column_title: any = [
		{
			title: "Playlist Name"
		},
		{
			title: "Date Created"
		},
		{
			title: "Playlist Owner"
		},
		{
			title: "Action"
		}
	]


  constructor() { }

  ngOnInit(): void {
    this.getPlaylist();
  }

  searchData(){
    if (this.search_key !== '') {
      this.searching = true;
    
      this.search_results = this.playlist.filter(
        i => i.playlist_name.toLowerCase().includes(this.search_key.toLowerCase())
      )
    } else {
      this.searching = false;
    }
    }

  getPlaylist() {
    this.playlist = [
      {
        playlist_name: "Player 1",
        date_created: "Today",
        playlist_owner: "Your Mom",
        action: "Sample"
      },
      {
        playlist_name: "Player 1",
        date_created: "Today",
        playlist_owner: "Your Mom",
        action: "Sample"
      },
      {
        playlist_name: "Player 1",
        date_created: "Today",
        playlist_owner: "Your Mom",
        action: "Sample"
      },
      {
        playlist_name: "Player 1",
        date_created: "Today",
        playlist_owner: "Your Mom",
        action: "Sample"
      },
      
    ]
  }
}
