import { Routes } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { WarmingScreenComponent } from './pages/warming-screen/warming-screen.component';

export const routes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [{ path: '', component: WarmingScreenComponent }],
	},
];
