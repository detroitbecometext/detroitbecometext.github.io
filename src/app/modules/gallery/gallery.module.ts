import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [GalleryComponent],
    imports: [SharedModule, GalleryRoutingModule],
})
export class GalleryModule {}
