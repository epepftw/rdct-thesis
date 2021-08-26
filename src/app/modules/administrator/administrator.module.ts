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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserKeyComponent } from './pages/user-key/user-key.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
	declarations: [
		LayoutComponent,
		DashboardComponent,
		AdvertisersComponent,
		MediaComponent,
		PlaylistComponent,
		TemplateComponent,
		UsersComponent,
  		UserKeyComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		SortablejsModule,
		MatDialogModule,
		RouterModule.forChild(ADMIN_ROUTES)
	],
	providers: [
		{
			provide: MatDialogRef,
			useValue: {}
		}
	]
})

export class AdministratorModule { }
