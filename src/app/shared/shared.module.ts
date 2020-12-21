import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { InfoDialogComponent } from './layout/info-dialog/info-dialog.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        BaseLayoutComponent,
        FooterComponent,
        HeaderComponent,
        InfoDialogComponent,
        SidenavComponent,
    ],
    imports: [CommonModule, MaterialModule, FlexLayoutModule],
    exports: [
        CommonModule,
        MaterialModule,
        BaseLayoutComponent,
        FooterComponent,
        HeaderComponent,
        InfoDialogComponent,
        SidenavComponent,
        FlexLayoutModule,
    ],
})
export class SharedModule {}
