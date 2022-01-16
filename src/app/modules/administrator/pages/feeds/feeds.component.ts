// IMPORT
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import * as filestack from 'filestack-js'
// ENVIRONMENT AND SERVICES
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';
// TYPES
import { SAVE_FILE_INFO, TICKER, YTURL } from 'src/app/core/types/MediaFile.types';
import { UPLOADED_FILE } from 'src/app/core/types/Filestack.types';
import { YoutubeMediaComponent } from 'src/app/shared/components/youtube-media/youtube-media.component';
import { TickerComponent } from 'src/app/shared/components/ticker/ticker.component';
import { CreateFeedComponent } from 'src/app/shared/pages/create-feed/create-feed.component';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  feeds: any[] = [];
  card_data_sample: any;
  
  

  constructor(
    public dialog: MatDialog,
    private _mediaFiles: MediaFileService,
    private _auth: AuthService ) {
    }

  ngOnInit(): void {
    this.getTicker();
  }

  getTicker() {
    this._mediaFiles.get_ticker().subscribe(
      (data: any) =>  {
        this.feeds = data;
        this.card_data_sample = [
          {
            digit: this.feeds.length,
            description: "All Files"
          },
          {
            digit: this.feeds.filter((media: TICKER) => {
              return media.mimetype == 'marquee'
            }).length,
            description: "Tickers"
          }
        ]
        console.log('#MEDIA FILES', this.feeds)
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateFeedComponent);
  }  
}
