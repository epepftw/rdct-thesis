import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
	current_user: any
	ad_players: {
		alias: string;
		player_key: string;
		status: string;
		date_created: string;
	}[] = [];

	card_data_sample: any = [
		{
			digit: 20,
			description: "Total Player Key"
		},
		{
			digit: 12,
			description: "Online Players"
		},
		{
			digit: 8,
			description: "Offline Players"
		}
	]

	table_column_title_ad: any = [
		{
			title: "Alias"
		},
		{
			title: "Player Key"
		},
		{
			title: "Status"
		},
		{
			title: "Date Created"
		}
	]

	constructor(
		private _auth: AuthService
	) { }

	ngOnInit(): void {
		this.getAllPlayer();
		this.getCurrentUser();
	}

	getAllPlayer() {

		this.ad_players = [
			{
				alias: "Bossboss",
				player_key: "PLAYER123456",
				status: "Online",
				date_created: "June 20, 2021"
			},
			{
				alias: "Deku",
				player_key: "PLAYER1234567",
				status: "Online",
				date_created: "June 21, 2021"
			},
			{
				alias: "Deku",
				player_key: "PLAYER1234567",
				status: "Online",
				date_created: "June 21, 2021"
			},
			{
				alias: "Deku",
				player_key: "PLAYER1234567",
				status: "Online",
				date_created: "June 21, 2021"
			},
		]
	}	

	getCurrentUser(){
		this.current_user = this._auth.getCurrentUser().user.name
	}

}
