import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  search_results: any[] = [];
  search_key: string = "";
	searching: boolean = false;
  playlist: any[] = [];


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
		}
		// {
		// 	title: "Action"
		// }
	]


  constructor(
    private _auth: AuthService,
    private _playlist: PlaylistService
  ) { }

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
    this._playlist.get_userPlaylist(this._auth.getCurrentUser().user._id).subscribe(
      (data : any) => {
        console.log('#Playlistsdfsdfsdf', this._auth.getCurrentUser().user._id)
        this.playlist = data;
        console.log('#Playlist Data', this.playlist)
      }
    )
  }
}