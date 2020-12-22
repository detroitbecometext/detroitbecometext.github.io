import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';

import { ChapterComponent } from './chapter/chapter.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '0',
        component: BaseLayoutComponent,
        children: [{ path: '', component: ChapterComponent }],
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
