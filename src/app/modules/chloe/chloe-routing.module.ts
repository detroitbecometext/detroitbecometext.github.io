import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';

import { ChloeComponent } from './chloe/chloe.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [{ path: '', component: ChloeComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChloeRoutingModule {}
