import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {MatAccordion} from '@angular/material/expansion';
import { AuthService } from 'src/app/core/services/auth.service';

// Types
import { TEMPLATE_TYPE } from 'src/app/core/types/Template.types';
import { CreateZoneComponent } from '../../components/create-zone/create-zone.component';
import { CREATE_ZONE, ZONE_TYPE } from 'src/app/core/types/Zones.types';
import { CREATE_TEMPLATE } from 'src/app/core/types/Template.types';
import { TemplateService } from 'src/app/core/services/template/template.service';
import { TickerComponent } from '../../components/ticker/ticker.component';
import { ADD_YTURL, TICKER, YTURL } from 'src/app/core/types/MediaFile.types';
import { CREATE_TICKER } from 'src/app/core/types/MediaFile.types';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
import { YoutubeMediaComponent } from '../../components/youtube-media/youtube-media.component';

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrls: ['./create-feed.component.scss']
})
export class CreateFeedComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  myControl = new FormControl();
  added_zone: any[] = [];
  contents: any[] = [];
  ticker_feed: TICKER[] = [];
  youtube_feed: YTURL[] = [];

  constructor(
    public dialog: MatDialog,
    private _form: FormBuilder,
    private _media: MediaFileService,
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(TickerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.contents = result;
      
      if(result){
        this.ticker_feed.push(result);
        console.log(this.ticker_feed)
        
      }
      
    });
  }

  openYtDialog() {
    const dialogRef = this.dialog.open(YoutubeMediaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.contents = result;
      
      if(result){
        this.youtube_feed.push(result);
        console.log(this.youtube_feed)
        
      }
      
    });
  }

  onSave() {
    this._media.create_ticker( new CREATE_TICKER(this.ticker_feed[0].name, this.ticker_feed[0].backgroundColor, this.ticker_feed[0].textColor, this.ticker_feed[0].fontSize, this.ticker_feed[0].content, this.ticker_feed[0].marqueeSpeed, this._auth.getCurrentUser().user)).subscribe(
      (data: any) => {
        console.log('sccess',data)
        this._router.navigate(['/admin/feeds'])
      }
    )
  }

  onYtSave() { 
    this._media.add_youtubeUrl( new ADD_YTURL(this.youtube_feed[0].name, this.youtube_feed[0].youtubeUrl, this._auth.getCurrentUser().user)).subscribe(
      (data : any) => {
        console.log('sccess',data)
        this._router.navigate(['/admin/feeds'])
      }
    )
  }
  

  removeTicker(data : any){
    if (data !== -1) {
      this.ticker_feed.splice(data, 1)
    }
    console.log(this.ticker_feed[data])
  }

  removeYt(data : any){
    if (data !== -1) {
      this.youtube_feed.splice(data, 1)
    }
    console.log(this.youtube_feed[data])
  }
}
