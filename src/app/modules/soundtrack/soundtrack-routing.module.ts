import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from '../layout/base-layout/base-layout.component';
import { SoundtrackComponent } from './soundtrack/soundtrack.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '1',
        component: BaseLayoutComponent,
        children: [{ path: '', component: SoundtrackComponent }],
    },
    {
        path: ':id',
        component: BaseLayoutComponent,
        children: [{ path: '', component: SoundtrackComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SoundtrackRoutingModule {}
