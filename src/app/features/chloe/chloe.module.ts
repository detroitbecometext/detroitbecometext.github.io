import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChloeRoutingModule } from './chloe-routing.module';
import { ChloeComponent } from './chloe/chloe.component';
import { SharedModule } from '@app/shared/shared.module';
import { TranslocoRootModule } from '@app/transloco/transloco-root.module';

@NgModule({
    declarations: [ChloeComponent],
    imports: [SharedModule, ChloeRoutingModule, TranslocoRootModule],
})
export class ChloeModule {}
