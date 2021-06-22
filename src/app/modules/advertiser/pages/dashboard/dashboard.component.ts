import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

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

	constructor() { }

	ngOnInit(): void {
		this.getAllPlayer();
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

}
