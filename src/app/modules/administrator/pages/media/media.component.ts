import { Component, OnInit } from '@angular/core';
import { MediaFileService } from 'src/app/core/services/mediaFile/media-file.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  mediaFiles: any[] = [];
  // media_file: {
  //   albumId: number,
  //   id: number,
  //   title: string,
  //   url: string,
  //   thumbnailUrl: string
  // }[] = [];

  card_data_sample: any = [
		{
			digit: 5120,
			description: "All Files"
		},
		{
			digit: 4521,
			description: "Images"
		},
		{
			digit: 599,
			description: "Videos"
		}
	]
  
  

  constructor(private _mediaFiles: MediaFileService) { }

  ngOnInit(): void {
    this.getMediaFiles();
  }

  getMediaFiles() {
    this._mediaFiles.get_mediaFiles().subscribe(
      (data: any) =>  {
        this.mediaFiles = data;
        console.log('#MEDIA FILES', this.mediaFiles)
      }
    )
  }
}
