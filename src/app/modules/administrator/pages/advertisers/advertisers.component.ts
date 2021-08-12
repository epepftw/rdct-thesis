import { Component, OnInit } from '@angular/core';
import { AdvertiserService } from 'src/app/core/services/advertiser/advertiser.service';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss']
})
export class AdvertisersComponent implements OnInit {
	search_results: any[] = [];
	table_title: string = "All Advertisers";
	search_key: string = "";
	searching: boolean = false;
	advertiser: any[] = [];
	
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

  constructor(private _advertiser: AdvertiserService) { }

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
	  this._advertiser.get_advertisers().subscribe(
		  (data: any) =>  {
			  this.advertiser = data;
			  console.log('#Advertisers', this.advertiser)
		  }
		  
	  )
	  
  }
}
