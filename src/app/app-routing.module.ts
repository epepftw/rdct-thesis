import { NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './route-guard/admin.guard';
import { AuthGuard } from './route-guard/auth.guard';
import { LoginGuard } from './route-guard/login.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule),
		canActivate: [LoginGuard]
	},
	{
		path: 'login',
		loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule),
		canActivate: [LoginGuard]
	},
	{
		path: 'admin',
		loadChildren: () => import('./modules/administrator/administrator.module').then(mod => mod.AdministratorModule),
		canActivate: [AdminGuard]
	},
	{
		path: 'advertiser',
		loadChildren: () => import('./modules/advertiser/advertiser.module').then(mod => mod.AdvertiserModule),
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [
		MatDialogModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	providers: [
		{
			provide: MatDialogRef,
			useValue: {
				close: (dialogResult: any) => { }
			}
		}
	]
})

export class AppRoutingModule { }
