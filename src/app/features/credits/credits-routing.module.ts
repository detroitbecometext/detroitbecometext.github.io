import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';

import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [{ path: '', component: CreditsComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreditsRoutingModule {}
