import { Routes } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { SoundtrackComponent } from './pages/soundtrack/soundtrack.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '1',
		pathMatch: 'full',
	},
	{
		path: ':id',
		component: BaseLayoutComponent,
		children: [{ path: '', component: SoundtrackComponent }],
	},
];
