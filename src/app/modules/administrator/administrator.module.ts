import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ADMIN_ROUTES } from './administrator.router';
import { SharedModule } from '../../shared/shared.module';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { MediaComponent } from './pages/media/media.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { TemplateComponent } from './pages/template/template.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
	declarations: [
		LayoutComponent,
		DashboardComponent,
  AdvertisersComponent,
  MediaComponent,
  PlaylistComponent,
  TemplateComponent,
  UsersComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(ADMIN_ROUTES)
	]
})

export class AdministratorModule { }
