import { Routes } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { ChloeComponent } from './pages/chloe/chloe.component';

export const routes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [{ path: '', component: ChloeComponent }],
	},
];
