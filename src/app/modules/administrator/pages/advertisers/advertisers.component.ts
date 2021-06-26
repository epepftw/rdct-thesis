import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss']
})
export class AdvertisersComponent implements OnInit {
	table_title: string = "All Advertisers";
	search_key: string = "";
	searching: boolean = false;
	search_results: any[] = [];

	advertiser: {
		name: string;
		total_key: string;
		total_playlist: string;
		date_created: string;
		account_status: string;

	}[] = [];
	
	card_data_sample: any = [
		{
			digit: 420,
			description: "Total Advertisers"
		},
		{
			digit: 69,
			description: "New Advertisers"
		}
	]


	table_column_title: any = [
		{
			title: "Name"
		},
		{
			title: "Total Keys"
		},
		{
			title: "Total Playlists"
		},
		{
			title: "Account Created"
		},
		{
			title: "Account Status"
		}
	]

  constructor() { }

  ngOnInit(): void {
	  this.getAllAdvertisers();
  }

  searchData(){
	if (this.search_key !== '') {
		this.searching = true;
	
		this.search_results = this.advertiser.filter(
			i => i.name.toLowerCase().includes(this.search_key.toLowerCase())
		)
	} else {
		this.searching = false;
	}
  }

  getAllAdvertisers(){
	  this.advertiser = [
		  {
			name: "Peter Porker",
			total_key: "2",
			total_playlist: "5",
			date_created: "June 22, 2021",
			account_status: "Active"
		  },
		  {
			name: "Putra Porker",
			total_key: "2",
			total_playlist: "5",
			date_created: "June 22, 2021",
			account_status: "Inactive"
		  },
		  {
			name: "Petero Porker",
			total_key: "2",
			total_playlist: "5",
			date_created: "June 22, 2021",
			account_status: "Active"
		  },
		  {
			name: "Petera Porker",
			total_key: "2",
			total_playlist: "5",
			date_created: "June 23, 2021",
			account_status: "Active"
		  },
		  {
			name: "Peters Porker",
			total_key: "2",
			total_playlist: "5",
			date_created: "June 22, 2021",
			account_status: "Active"
		  }
	  ]
  }
}
