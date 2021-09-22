import { NgModule } from '@angular/core';

import { MagazinesRoutingModule } from './magazines-routing.module';
import { MagazineComponent } from './magazine/magazine.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [MagazineComponent],
    imports: [MagazinesRoutingModule, SharedModule],
})
export class MagazinesModule {}
