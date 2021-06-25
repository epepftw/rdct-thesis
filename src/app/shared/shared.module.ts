import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { AdvertisersTableComponent } from './components/advertisers-table/advertisers-table.component';
import { MediaFilesComponent } from './components/media-files/media-files.component';

const shared_components = [
	NavbarComponent,
	SidenavComponent,
	CardComponent,
	PlayersTableComponent,
	AdvertisersTableComponent,
	MediaFilesComponent
]

@NgModule({
	declarations: [
		shared_components,
		PlayersTableComponent,
		AdvertisersTableComponent,
  MediaFilesComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		shared_components
	]
})

export class SharedModule { }