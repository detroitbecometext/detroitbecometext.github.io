import { Routes } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [{ path: '', component: NotFoundComponent }],
	},
];
