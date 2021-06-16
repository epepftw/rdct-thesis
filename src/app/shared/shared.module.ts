import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';

const shared_components = [
	NavbarComponent,
	SidenavComponent,
	CardComponent
]

@NgModule({
	declarations: [
		shared_components
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