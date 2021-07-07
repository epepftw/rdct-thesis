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

const shared_components = [
	NavbarComponent,
	SidenavComponent,
	CardComponent,
	PlayersTableComponent,
	AdvertisersTableComponent,
	MediaFilesComponent,
	UsersTableComponent,
	KeysTableComponent,
	NewUserComponent,
	NewuserFormComponent,
	GenerateKeyFormComponent
]

@NgModule({
	declarations: [
		shared_components
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule
	],
	exports: [
		shared_components
	]
})

export class SharedModule { }