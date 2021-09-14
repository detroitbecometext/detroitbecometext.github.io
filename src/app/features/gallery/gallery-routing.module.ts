import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '1',
        component: BaseLayoutComponent,
        children: [{ path: '', component: GalleryComponent }],
    },
    {
        path: ':id',
        component: BaseLayoutComponent,
        children: [{ path: '', component: GalleryComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GalleryRoutingModule {}
