import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ADVERTISER_ROUTES } from './advertiser.router';
import { SharedModule } from '../../shared/shared.module';
import { MediaComponent } from './pages/media/media.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { TemplateComponent } from './pages/template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { UserKeyComponent } from './pages/user-key/user-key.component';

@NgModule({
	declarations: [
		LayoutComponent,
		DashboardComponent,
		MediaComponent,
		PlaylistComponent,
		TemplateComponent,
  		UserKeyComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		MatDialogModule,
		RouterModule.forChild(ADVERTISER_ROUTES)
	]
})

export class AdvertiserModule { }
