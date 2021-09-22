import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChloeRoutingModule } from './chloe-routing.module';
import { ChloeComponent } from './chloe/chloe.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [ChloeComponent],
    imports: [SharedModule, ChloeRoutingModule],
})
export class ChloeModule {}
