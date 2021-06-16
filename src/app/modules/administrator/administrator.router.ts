import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MediaComponent } from './pages/media/media.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { TemplateComponent } from './pages/template/template.component';
import { UsersComponent } from './pages/users/users.component';

export const ADMIN_ROUTES: Routes = [
	{
		path: '',
		component: LayoutComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'advertiser',
                component: AdvertisersComponent
            },
            {
                path: 'media',
                component: MediaComponent
            },
            {
                path: 'playlist',
                component: PlaylistComponent
            },
            {
                path: 'template',
                component: TemplateComponent
            },
            {
                path: 'user',
                component: UsersComponent
            }

        ]
	}
];