import { NgModule } from '@angular/core';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './credits/credits.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [CreditsComponent],
    imports: [SharedModule, CreditsRoutingModule],
})
export class CreditsModule {}
