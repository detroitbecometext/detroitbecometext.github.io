import { NgModule } from '@angular/core';

import { SoundtrackRoutingModule } from './soundtrack-routing.module';
import { SoundtrackComponent } from './soundtrack/soundtrack.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [SoundtrackComponent],
    imports: [SoundtrackRoutingModule, SharedModule],
})
export class SoundtrackModule {}
