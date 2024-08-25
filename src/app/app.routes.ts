import { Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

export const routes: Routes = [
	// Home
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{
		path: 'home',
		component: HomeComponent,
	},
	// Other pages
	{
		path: 'contact',
		loadChildren: () =>
			import('./contact/contact.routes').then((m) => m.routes),
	},
	{
		path: 'chapters',
		component: BaseLayoutComponent,
		loadChildren: () =>
			import('./chapters/chapters.routes').then((m) => m.routes),
	},
	{
		path: 'not-found',
		loadChildren: () =>
			import('./not-found/not-found.routes').then((m) => m.routes),
	},
	{
		path: 'credits',
		loadChildren: () =>
			import('./credits/credits.routes').then((m) => m.routes),
	},
	{
		path: 'chloe',
		loadChildren: () =>
			import('./chloe/chloe.routes').then((m) => m.routes),
	},
	{
		path: 'magazines',
		loadChildren: () =>
			import('./magazines/magazines.routes').then((m) => m.routes),
	},
	{
		path: 'gallery',
		loadChildren: () =>
			import('./gallery/gallery.routes').then((m) => m.routes),
	},
	{
		path: 'soundtrack',
		loadChildren: () =>
			import('./soundtrack/soundtrack.routes').then((m) => m.routes),
	},
	{
		path: 'warming',
		loadChildren: () =>
			import('./warming-screen/warming-screen.routes').then(
				(m) => m.routes,
			),
	},

	// Redirect to 404
	{ path: '**', redirectTo: '/not-found' },
];
