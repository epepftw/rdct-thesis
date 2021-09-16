import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';
import { GenerateKeyFormComponent } from 'src/app/shared/components/generate-key-form/generate-key-form.component';
import { Keys } from 'src/app/core/types/Keys.types';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-user-key',
  templateUrl: './user-key.component.html',
  styleUrls: ['./user-key.component.scss']
})
export class UserKeyComponent implements OnInit {
    keys: any[] = []; 
    table_title: string = "Keys";
    search_key: string = "";
    searching: boolean = false;
    search_results: any[] = [];

    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    
    card_data_sample: any = [
      {
        digit: 420,
        description: "Total Keys Generated",
        logo: "fas fa-key"
      },
      {
        digit: 69,
        description: "Newly Generated Keys",
        logo: "fab fa-keybase"
      }
    ]
    
    table_column_title: any = [
      {
        title: "Key Holder"
      },
      {
        title: "Key"
      },
      {
        title: "Status"
      },
      {
        title: "Date Created"
      }
    ]
  closeResult: string = '';

  constructor(
          public dialog: MatDialog,
          private _auth: AuthService,
          private _keys: UserKeysService) { 
                
              }

  ngOnInit(): void {
    this.getKeys();
  }

//   openAdd() {
//     const modalRef = this.modalService.open(GenerateKeyFormComponent);
//     modalRef.componentInstance.test = 'Generate Key';
//     modalRef.closed.subscribe(
//       (res) => {
//         console.log(res)
//       },
//       (err) => {

//       }
//     )
//   //   modalRef.componentInstance.rawdata = data;
//   //   console.log(data)
//  }

  openDialog() {
    const dialogRef = this.dialog.open(GenerateKeyFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  
  // openDelete(data : any) {
  //   const modalRef = this.modalService.open(GenerateKeyFormComponent);
  //   modalRef.componentInstance.test = 'Delete';
  //   modalRef.componentInstance.rawdata = data;
  //   console.log(data)
  // }

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

  getKeys() {
    this._keys.get_userKeys(this._auth.getCurrentUser().user._id).subscribe(
      (data: Keys[]) => {
        console.log('#Plasdfsdfsdff', this._auth.getCurrentUser().user._id)
        this.keys = data;
        console.log("#Keys", this.keys)
      }
    )
  }

 
}
