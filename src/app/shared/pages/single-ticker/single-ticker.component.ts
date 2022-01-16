import { Component, OnInit } from '@angular/core';
import { TICKER } from 'src/app/core/types/MediaFile.types';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-ticker',
  templateUrl: './single-ticker.component.html',
  styleUrls: ['./single-ticker.component.scss']
})
export class SingleTickerComponent implements OnInit {
  ticker_id: string = '';
  data: TICKER;
  ticker_preparing : boolean;

  constructor(
    public _media : MediaFileService,
    private _router: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(
      (data: any) => {
        this.ticker_id = data.params.id;
        this.getTickerData();
      }
    )
  }

  getTickerData() {
    this.ticker_preparing = true;
    this._media.get_ticker_page(this.ticker_id).subscribe(
      (data: TICKER) => {
        this.data = data;
        this.ticker_preparing = false;
        console.log('#TICKER DATA', this.data)
      }
    )
  }

}
