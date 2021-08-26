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

//Angular Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import {MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY} from '@angular/material/autocomplete'; 
import {MatStepperModule} from '@angular/material/stepper';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MediaFileModalComponent } from './components/media-file-modal/media-file-modal.component';
import { SortablejsModule } from 'ngx-sortablejs';


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
	UserProfileComponent
]

const ng_material = [
	MatButtonModule,
	MatInputModule,
	MatCardModule,
	MatDialogModule,
	MatSlideToggleModule,
	MatTabsModule,
	MatAutocompleteModule,
	MatStepperModule,
	ScrollingModule,
	MatFormFieldModule
]

@NgModule({
	declarations: [
		shared_components,
  MediaFileModalComponent,
		
	],
	entryComponents: [
		GenerateKeyFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SortablejsModule,
		ng_material,
		RouterModule,
		
	],
	exports: [
		shared_components,
		ng_material
	]
})

export class SharedModule { }