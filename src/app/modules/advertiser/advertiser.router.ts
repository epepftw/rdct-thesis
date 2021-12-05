import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MediaComponent } from './pages/media/media.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { TemplateComponent } from './pages/template/template.component';
import { UserKeyComponent } from './pages/user-key/user-key.component';
import { CreatePlaylistAdComponent } from 'src/app/shared/pages/create-playlist-ad/create-playlist-ad.component';
import { SinglePlaylistAdComponent } from 'src/app/shared/pages/single-playlist-ad/single-playlist-ad.component';
import { SingleKeyComponent } from 'src/app/shared/pages/single-key/single-key.component';

export const ADVERTISER_ROUTES: Routes = [
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
                path: 'keys',
                component: UserKeyComponent
            },
            {
                path: 'keys/:id',
                component: SingleKeyComponent
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
                component: CreatePlaylistAdComponent
            },
            {
                path: 'playlist/:id',
                component: SinglePlaylistAdComponent
            },
            {
                path: 'template',
                component: TemplateComponent
            }
        ]
	}
];