import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

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

	constructor() { }

	ngOnInit(): void {
	}

}
