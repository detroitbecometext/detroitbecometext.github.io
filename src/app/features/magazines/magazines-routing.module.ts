import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { MagazineComponent } from './magazine/magazine.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '1',
        component: BaseLayoutComponent,
        children: [{ path: '', component: MagazineComponent }],
    },
    {
        path: ':id',
        component: BaseLayoutComponent,
        children: [{ path: '', component: MagazineComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MagazinesRoutingModule {}
