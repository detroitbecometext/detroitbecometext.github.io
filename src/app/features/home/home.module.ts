import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { TranslocoRootModule } from '@app/transloco/transloco-root.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        SharedModule,
        HomeRoutingModule,
        LayoutModule,
        TranslocoRootModule,
    ],
})
export class HomeModule {}
