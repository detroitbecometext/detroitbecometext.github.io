import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { EndingsComponent } from './chapter-contents/endings/endings.component';

import { ChapterComponent } from './chapter/chapter.component';

const routes: Routes = [
    {
        path: 'endings',
        component: BaseLayoutComponent,
        children: [{ path: '', component: EndingsComponent }],
    },
    {
        path: '',
        redirectTo: '1',
        pathMatch: 'full',
    },
    {
        path: ':id',
        component: BaseLayoutComponent,
        children: [{ path: '', component: ChapterComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChaptersRoutingModule {}
