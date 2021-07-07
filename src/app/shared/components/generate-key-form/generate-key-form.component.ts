import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';


@Component({
  selector: 'app-generate-key-form',
  templateUrl: './generate-key-form.component.html',
  styleUrls: ['./generate-key-form.component.scss']
})
export class GenerateKeyFormComponent implements OnInit {
  user_name : any[] = [];
  @Input() test : String = '';
  @Input() rawdata : any = '';


  constructor(private _users: UserService) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(){
    this._users.get_users().subscribe(
      (data : any) => {
        this.user_name = data;
        console.log('#USERS', this.user_name)
      }
    )
  }
}
