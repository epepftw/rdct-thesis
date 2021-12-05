import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TemplateService } from 'src/app/core/services/template/template.service';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { PLAYLIST } from 'src/app/core/types/Playlist.types';
import { TEMPLATE_TYPE } from 'src/app/core/types/Template.types'
import { CREATE_SCREEN, SCREEN_TYPE, ZONE_PLAYLIST } from 'src/app/core/types/Screen.types';
import { AdvertiserService } from 'src/app/core/services/advertiser/advertiser.service';
import { ScreenService } from 'src/app/core/services/screen/screen.service';


@Component({
  selector: 'app-create-screen',
  templateUrl: './create-screen.component.html',
  styleUrls: ['./create-screen.component.scss']
})
export class CreateScreenComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  template: any[] = [];
  selected_template: TEMPLATE_TYPE;
  options: any[] = [];
  playlist: PLAYLIST[] = [];
  selected_playlist: any;
  myControl = new FormControl();
  playlistOptions: PLAYLIST[] = [];
  zone_playlist:  ZONE_PLAYLIST[] = [];
  filteredOptions: Observable<any[]>;

  constructor(
    private _form: FormBuilder,
    private _advertiser: AdvertiserService,
    private _template: TemplateService,
    private _playlist: PlaylistService,
    private _screen: ScreenService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getAdvertiser();
    this.getTemplates();
    this.firstFormGroup = this._form.group(
      {
        screen_name: ['', Validators.required],
        advertiser_id: ['', Validators.required]
      });
    this.secondFormGroup = this._form.group(
      {
        playlist_id: ['', Validators.required]
      });

      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice()),
      );
    
    this.filteredOptions.subscribe((data : any[]) => {
      if (data.length > 0) {
        this.firstFormGroup.controls['advertiser_id'].setValue(data[0]._id)
        console.log(data[0]._id)
        this.getPlaylist(data[0]._id)
      }
    }); 

  }

  //FILTERED
  displayFn(user : any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any[] {
    console.log("#FILTERED NAME",name)
    const filterValue = name.toLowerCase();

    this.options.filter(option => {
      
      console.log('$Filtered Values',option.name.toLowerCase().includes(filterValue))
    })

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  getAdvertiser() {
    this._advertiser.get_advertisers().subscribe(
      (data : any) => {
        this.options = data;
        console.log('HI ADVERTISER',this.options)
      }
    )
  }

  getPlaylist(data : any) {
    this._playlist.get_userPlaylist(data).subscribe(
      (data : any) => {
        this.playlist = data;
        console.log('HI PLAYLIST',this.playlist)
      }
    )
  }

  onPlaylistSelect(playlist : any, zone : any) {
    if(this.zone_playlist.filter(z => z.zone_id == zone._id).length) {
      const index = this.zone_playlist.findIndex(x => x.zone_id === zone._id);
      this.zone_playlist[index].playlist_id = playlist.value._id
    } else {
      this.zone_playlist.push(new ZONE_PLAYLIST(zone._id, playlist.value._id))
        
    }
    console.log('ssssssssssss', this.zone_playlist)
  }

  getTemplates() {
    this._template.get_template().subscribe(
      (data : any) => {
        this.template = data;
        console.log('HI TEMPLATE',this.template)
      }
    )
  }

  onSelectTemplate(data : any) {
    this.selected_template = data;
    console.log('HAIi mark',this.selected_template)
    
  }

  onFormSubmit() {
    console.log(this.firstFormGroup.get('screen_name').value)

    const structuredPayload = new CREATE_SCREEN(this.firstFormGroup.get('screen_name').value,  this.firstFormGroup.get('advertiser_id').value, this.selected_template.template._id, this.zone_playlist)
    console.log('asfasdasd', structuredPayload )
    this._screen.create_screen(structuredPayload).subscribe(
      (data : SCREEN_TYPE) => {
        console.log('TETETETET',data)
        this._router.navigate(['/admin/screen/', data._id])
  
      },
      error => {
        console.log(error)
      }
    )
  }

  isPlaylistIncluded(data: any) {
    return this.selected_playlist.includes(data)
  }
}
