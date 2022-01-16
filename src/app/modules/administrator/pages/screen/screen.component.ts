import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/core/services/screen/screen.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  search_results: any[] = [];
  search_key: string = "";
	searching: boolean = false;
  screen: any[] = [];

  card_data_sample: any;
  table_column_title: any = [
		{
			title: "Screen Name"
		},
		{
			title: "Screen ID"
		},
		{
			title: "Template ID"
		}
		// {
		// 	title: "Action"
		// }
	]




  constructor(
    private _screen : ScreenService
  ) { }

  ngOnInit(): void {
    this.getScreen();
  }

  searchData(){
    if (this.search_key !== '') {
      this.searching = true;
    
      this.search_results = this.screen.filter(
        i => i.screen_name.toLowerCase().includes(this.search_key.toLowerCase())
      )
    } else {
      this.searching = false;
    }
    }

  
  getScreen() {
    this._screen.get_screen().subscribe(
      (data : any) => {
        this.screen = data;
        this.card_data_sample = [
         {
          digit: this.screen.length,
          description: "All Screen"
         }
        ]
        console.log('#SCREEEN',this.screen)
      }
    )
  }
}
