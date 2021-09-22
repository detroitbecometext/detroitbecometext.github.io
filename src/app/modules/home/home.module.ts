import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [HomeComponent, CardContainerComponent, CardComponent],
    imports: [SharedModule, HomeRoutingModule, LayoutModule],
})
export class HomeModule {}
