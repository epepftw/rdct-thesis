import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-youtube-media',
  templateUrl: './youtube-media.component.html',
  styleUrls: ['./youtube-media.component.scss']
})
export class YoutubeMediaComponent implements OnInit {
  myControl = new FormControl();
  create_youtube_form : FormGroup;

  constructor(
    private _form: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    this.create_youtube_form = this._form.group(
      {
        name : ['', Validators.required],
        youtubeUrl : ['', Validators.required]
      }
    )
  }

}
