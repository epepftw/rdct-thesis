import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keys-table',
  templateUrl: './keys-table.component.html',
  styleUrls: ['./keys-table.component.scss']
})
export class KeysTableComponent implements OnInit {

  @Input() title: any = '';
  @Input() column_title: any = '';
  @Input() data: any = '';

  @Output() edit = new EventEmitter;
  @Output() delete = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(data : any){
    this.edit.emit(data)

  }

  deleteModal(data : any){
    this.delete.emit(data)
  }


}
