import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { AdvertisersTableComponent } from './components/advertisers-table/advertisers-table.component';
import { MediaFilesComponent } from './components/media-files/media-files.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { KeysTableComponent } from './components/keys-table/keys-table.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { NewuserFormComponent } from './components/newuser-form/newuser-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateKeyFormComponent } from './components/generate-key-form/generate-key-form.component';
import { PlaylistTableComponent } from './components/playlist-table/playlist-table.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CreatePlaylistComponent } from './pages/create-playlist/create-playlist.component';
import { MediaFileModalComponent } from './components/media-file-modal/media-file-modal.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { SinglePlaylistComponent } from './pages/single-playlist/single-playlist.component';
import { PlaylistContentTableComponent } from './components/playlist-content-table/playlist-content-table.component';
import { AssignKeyComponent } from './components/assign-key/assign-key.component';
import { MediaFileModalAdComponent } from './components/media-file-modal-ad/media-file-modal-ad.component';
import { CreatePlaylistAdComponent } from './pages/create-playlist-ad/create-playlist-ad.component';
import { SinglePlaylistAdComponent } from './pages/single-playlist-ad/single-playlist-ad.component';
import { MyChartComponent } from './components/my-chart/my-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileKeyComponent } from './components/profile-key/profile-key.component';
import { ProfileTableComponent } from './components/profile-table/profile-table.component';
import { SingleKeyComponent } from './pages/single-key/single-key.component';
import { CreateTemplateComponent } from './pages/create-template/create-template.component';
import { CreateZoneComponent } from './components/create-zone/create-zone.component';
import { AddedZoneLayoutComponent } from './components/added-zone-layout/added-zone-layout.component';

import { ImagePipe } from './pipes/image.pipe';

//Angular Material Components
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import {MatStepperModule} from '@angular/material/stepper';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { CreateScreenComponent } from './components/create-screen/create-screen.component';
import { SingleScreenComponent } from './pages/single-screen/single-screen.component';
import { PlaylistDemoComponent } from './components/playlist-demo/playlist-demo.component';
import { ScreenDemoComponent } from './components/screen-demo/screen-demo.component';



const shared_components = [
	NavbarComponent,
	SidenavComponent,
	CardComponent,
	CreatePlaylistComponent,
	PlayersTableComponent,
	AdvertisersTableComponent,
	MediaFilesComponent,
	UsersTableComponent,
	KeysTableComponent,
	NewUserComponent,
	NewuserFormComponent,
	GenerateKeyFormComponent,
	PlaylistTableComponent,
	UserProfileComponent,
	MediaFileModalComponent,
    SinglePlaylistComponent,
    PlaylistContentTableComponent,
    AssignKeyComponent,
    MediaFileModalAdComponent,
    CreatePlaylistAdComponent,
    SinglePlaylistAdComponent,
    MyChartComponent,
	HeaderComponent,
	ProfileKeyComponent,
	ProfileTableComponent,
	SingleKeyComponent,
	CreateTemplateComponent,
	CreateZoneComponent,
	AddedZoneLayoutComponent,
	CreateScreenComponent,
	SingleScreenComponent,
	PlaylistDemoComponent,
	ScreenDemoComponent,
]

const ng_material = [
	MatIconModule,
	MatButtonModule,
	MatInputModule,
	MatCardModule,
	MatDialogModule,
	MatSlideToggleModule,
	MatTabsModule,
	MatAutocompleteModule,
	MatStepperModule,
	ScrollingModule,
	MatFormFieldModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatSelectModule
]

@NgModule({
	declarations: [
		shared_components,
		ImagePipe
 
  
	],
	entryComponents: [
		GenerateKeyFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ng_material,
		SortablejsModule,
		RouterModule
	],
	exports: [
		shared_components,
		ng_material,
		ImagePipe
	]
})

export class SharedModule { }