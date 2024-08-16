import { Routes } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { CreditsComponent } from './pages/credits/credits.component';

export const routes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [{ path: '', component: CreditsComponent }],
	},
];
