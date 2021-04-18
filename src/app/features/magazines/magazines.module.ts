import { NgModule } from '@angular/core';

import { MagazinesRoutingModule } from './magazines-routing.module';
import { MagazineComponent } from './magazine/magazine.component';
import { TranslocoRootModule } from '@app/transloco/transloco-root.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [MagazineComponent],
    imports: [MagazinesRoutingModule, SharedModule, TranslocoRootModule],
})
export class MagazinesModule {}
