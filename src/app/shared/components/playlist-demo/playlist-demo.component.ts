import { Component, Input, OnInit } from '@angular/core';
import { ImagePipe } from 'src/app/shared/pipes/image.pipe';
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';


@Component({
  selector: 'app-playlist-demo',
  templateUrl: './playlist-demo.component.html',
  styleUrls: ['./playlist-demo.component.scss'],
  providers: [ImagePipe]
})
export class PlaylistDemoComponent implements OnInit {

  @Input() playlist_data :  SAVE_FILE_INFO[] = [];
  current_assets : string = '';
  current_file_type : string = '';
  current_sequence : number = 0;
  img_duration : number = 3;

  constructor(
    private _image : ImagePipe
  ) { }

  ngOnInit(): void {
    if(this.playlist_data.length) {
      this.checkFileType(this.current_sequence)
    }
  }
  checkFileType(sequence : number) : void {
    setTimeout(() => {
      this.current_file_type = this.playlist_data[sequence].mimetype;
      console.log('asdfasdfasdfasdfasdfassdfasdfasdf', sequence, this.current_file_type)
      if(this._image.transform(this.playlist_data[sequence].mimetype)) {
        console.log('qweqweqweqweqweqwe')
        this.displayImage(this.playlist_data[sequence].file_url)
      } else if (this.current_file_type == 'video/mp4') {
        console.log('zxczxczxczxczxc')
        this.displayVideo(this.playlist_data[sequence].file_url)
      }
    }, 0)
  }

  displayImage(image_url : string) {
    this.current_assets = image_url;
    this.runImageDuration();
  }

  displayVideo(video_url : string) {
    this.current_assets = video_url;
  }

  onVideoEnded() {
    this.current_file_type = '';
    this.current_assets = '';
    if(this.current_sequence < this.playlist_data.length - 1) {
      this.current_sequence += 1;
      this.checkFileType(this.current_sequence)
      console.log('FIRE1')
    } else {
      this.current_sequence = 0;
      this.checkFileType(this.current_sequence)
      console.log('FIR2E')
    }
    console.log('FIRE')
  }

  runImageDuration() {
    setTimeout(() => {
      if(this.current_sequence < this.playlist_data.length - 1) {
        this.current_sequence += 1;
        this.checkFileType(this.current_sequence)
        console.log('FIRE1')
      } else {
        this.current_sequence = 0;
        this.checkFileType(this.current_sequence)
        console.log('FIR2E')
      }
      this.current_file_type = '';
      this.current_assets = '';
    }, this.img_duration * 1000)
  }
}
