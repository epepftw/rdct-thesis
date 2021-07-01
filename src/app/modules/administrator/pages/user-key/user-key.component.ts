import { Component, OnInit } from '@angular/core';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';

@Component({
  selector: 'app-user-key',
  templateUrl: './user-key.component.html',
  styleUrls: ['./user-key.component.scss']
})
export class UserKeyComponent implements OnInit {
    table_title: string = "Keys";
    search_key: string = "";
    searching: boolean = false;
    search_results: any[] = [];

    keys: {
      name: string;
      total_key: string;
      online_key: string;
      offline_key: string;
    }[] = [];
    
    card_data_sample: any = [
      {
        digit: 420,
        description: "Total Keys Generated",
        logo: "fas fa-key fa-5x"
      },
      {
        digit: 69,
        description: "Newly Generated Keys",
        logo: "fab fa-keybase fa-5x"
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
        title: "Online Keys"
      },
      {
        title: "Offline Keys"
      }
    ]
  constructor(/*private _keys: UserKeysService*/) { }

  ngOnInit(): void {
    this.getKeys();
  }

  searchData(){
    if (this.search_key !== '') {
        this.searching = true;
      
        this.search_results = this.keys.filter(
          i => i.name.toLowerCase().includes(this.search_key.toLowerCase())
        )
      } else {
        this.searching = false;
      }
    }

  // getKeys() {
  //   this._keys.get_keys().subscribe(
  //     (data: any) => {
  //       this.keys = data;
  //       console.log("Keys", this.keys)
  //     }
  //   )
  // }

  getKeys(){
    this.keys = [
      {
        name: "Ubuvwe Ossas",
        total_key: "25",
        online_key: "20",
        offline_key: "5"
      },
      {
        name: "Kwaza Waza",
        total_key: "300",
        online_key: "200",
        offline_key: "100"
      },
      {
        name: "Kokwala Ossas",
        total_key: "90",
        online_key: "20",
        offline_key: "70"
      },
      {
        name: "Foreva Ossas",
        total_key: "25",
        online_key: "20",
        offline_key: "5"
      },
      {
        name: "Ubuvwevwe Ossas",
        total_key: "25",
        online_key: "20",
        offline_key: "5"
      }
    ]
  }
}
