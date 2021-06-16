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

@NgModule({
	declarations: [
		LayoutComponent,
		DashboardComponent,
  MediaComponent,
  PlaylistComponent,
  TemplateComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(ADVERTISER_ROUTES)
	]
})

export class AdvertiserModule { }
