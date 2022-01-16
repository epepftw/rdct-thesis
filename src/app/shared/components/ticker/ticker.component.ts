import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TICKER } from 'src/app/core/types/MediaFile.types';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {
  myControl = new FormControl();
  create_ticker_form : FormGroup;
  tickerColor : string = "#ff4d4d";
  textColor : string = "#ffffff";

  constructor(
    private _form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.create_ticker_form = this._form.group(
      {
        name : ['', Validators.required],
        backgroundColor : ['', Validators.required],
        textColor : ['', Validators.required],
        fontSize : ['', Validators.required],
        content : ['', Validators.required],
        marqueeSpeed : ['', Validators.required],
      }
    )
  }

  setTickerColor(data: any): void {
    console.log(data.target.value)
    this.tickerColor = data.target.value;
  }

  setTextColor(data: any): void {
    console.log(data.target.value)
    this.textColor = data.target.value;
  }

}
