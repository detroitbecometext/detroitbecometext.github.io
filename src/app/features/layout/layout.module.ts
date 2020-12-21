import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        BaseLayoutComponent,
        FooterComponent,
        HeaderComponent,
        InfoDialogComponent,
        SidenavComponent,
    ],
    imports: [SharedModule],
    exports: [FooterComponent, BaseLayoutComponent],
})
export class LayoutModule {}
