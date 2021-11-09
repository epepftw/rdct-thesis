import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  search_key: string = "";
	searching: boolean = false;
	search_results: any[] = [];


  table_column_title: any = [
		{
			title: "Name"
		},
		{
			title: "Username"
		},
		{
			title: "E-mail"
		},
		{
			title: "Phone"
		},
    {
      title: "Address"
    },
     {
       title: "Privilege"
     }
	]
  
  constructor(private _users: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  searchData(){
    if (this.search_key !== '') {
      this.searching = true;
    
      this.search_results = this.users.filter(
        i => i.name.toLowerCase().includes(this.search_key.toLowerCase())
      )
    } else {
      this.searching = false;
    }
    }

  getUsers() {
    this._users.get_users().subscribe(
      (data: any) =>  {
        this.users = data;
        console.log('#USERS', this.users)
      }
    )
  }
}
