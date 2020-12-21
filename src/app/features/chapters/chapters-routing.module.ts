import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterComponent } from './chapter/chapter.component';

const routes: Routes = [{ path: ':id', component: ChapterComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChaptersRoutingModule {}
