import { Routes } from '@angular/router';
import { CreatePlaylistComponent } from 'src/app/shared/pages/create-playlist/create-playlist.component';
import { NewUserComponent } from 'src/app/shared/pages/new-user/new-user.component';
import { SinglePlaylistComponent } from 'src/app/shared/pages/single-playlist/single-playlist.component';
import { UserProfileComponent } from 'src/app/shared/pages/user-profile/user-profile.component';
import { LayoutComponent } from './layout/layout.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MediaComponent } from './pages/media/media.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { TemplateComponent } from './pages/template/template.component';
import { UserKeyComponent } from './pages/user-key/user-key.component';
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
                path: 'keys',
                component: UserKeyComponent
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
                path: 'playlist/create',
                component: CreatePlaylistComponent
            },
            {
                path: 'playlist/:id',
                component: SinglePlaylistComponent
            },
            {
                path: 'template',
                component: TemplateComponent
            },
            {
                path: 'user',
                component: UsersComponent
            },
            {
                path: 'user/add',
                component: NewUserComponent
            },
            {
                path: 'user/profile',
                component: UserProfileComponent
            }
        ]
	}
];