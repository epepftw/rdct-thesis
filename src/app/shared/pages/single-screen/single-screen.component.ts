import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenService } from 'src/app/core/services/screen/screen.service';
import { SCREEN } from 'src/app/core/types/Screen.types';

@Component({
  selector: 'app-single-screen',
  templateUrl: './single-screen.component.html',
  styleUrls: ['./single-screen.component.scss']
})
export class SingleScreenComponent implements OnInit {
  screen_id : string = '';
  screen_data : SCREEN;


  constructor(
    private _screen : ScreenService,
    private _router : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(
      (data : any) => {
        this.screen_id = data.params.id;
        this.getScreenData();
      }
    )
  }

  getScreenData() {
    this._screen.get_screen_byId(this.screen_id).subscribe(
      (data : any) => {
        this.screen_data = data;
        console.log('#SCREENID DATA', this.screen_data)
      }
    )
  }
}
