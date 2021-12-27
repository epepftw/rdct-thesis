import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';

import { ImagePipe } from 'src/app/shared/pipes/image.pipe';
import { SAVE_FILE_INFO } from 'src/app/core/types/MediaFile.types';

@Component({
  selector: 'app-duration-modal',
  templateUrl: './duration-modal.component.html',
  styleUrls: ['./duration-modal.component.scss'],
  providers: [ImagePipe]
})
export class DurationModalComponent implements OnInit {

  @Input() data: any = '';
  myControl = new FormControl();
  set_duration_form : FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public media_info : any,
                             private _playlist : PlaylistService,
                             private _form: FormBuilder,
                             public dialogRef: MatDialogRef<DurationModalComponent>,
                             private _image : ImagePipe
  ) { }

  ngOnInit(): void {
    console.log('#MEDIA',this.media_info)
    this.set_duration_form = this._form.group(
      {
        duration: [this.media_info.file.duration , Validators.required]
      }
    )
  }
  
  onFormSubmit() {
    const payload = {
      _id: this.media_info.playlist_id,
      playlist_content_id: this.media_info.file.playlist_content_id,
      duration: this.set_duration_form.get('duration').value
    }

    console.log('ha;asdasdasd', payload)

    this._playlist.set_duration(payload).subscribe(
      (data : any) => {
        console.log('HELLO',data)
        this.dialogRef.close(1)
      }
    )
  }
}
