import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '@app/shared/shared.module';
import { TranslocoRootModule } from '@app/transloco/transloco-root.module';

@NgModule({
    declarations: [GalleryComponent],
    imports: [SharedModule, GalleryRoutingModule, TranslocoRootModule],
})
export class GalleryModule {}
