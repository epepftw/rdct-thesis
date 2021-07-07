import { Component, OnInit } from '@angular/core';
import { UserKeysService } from 'src/app/core/services/user-keys/user-keys.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { GenerateKeyFormComponent } from 'src/app/shared/components/generate-key-form/generate-key-form.component';

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
  closeResult: string = '';
  constructor(/*private _keys: UserKeysService*/private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getKeys();
  }

  openEdit(data : any) {
    const modalRef = this.modalService.open(GenerateKeyFormComponent);
    modalRef.componentInstance.test = 'Edit';
    modalRef.componentInstance.rawdata = data;
    console.log(data)
  }

  openDelete(data : any) {
    const modalRef = this.modalService.open(GenerateKeyFormComponent);
    modalRef.componentInstance.test = 'Delete';
    modalRef.componentInstance.rawdata = data;
    console.log(data)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
