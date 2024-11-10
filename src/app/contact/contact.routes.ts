import { Routes } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [{ path: '', component: ContactComponent }],
	},
];
