import { Routes } from '@angular/router';
import { EndingsComponent } from './pages/endings/endings.component';
import { ChapterComponent } from './pages/chapter/chapter.component';

export const routes: Routes = [
	{
		path: 'endings',
		component: EndingsComponent,
	},

	{
		path: '',
		redirectTo: '1',
		pathMatch: 'full',
	},
	{
		path: ':id',
		component: ChapterComponent,
	},
];
