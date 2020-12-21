import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/icons.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule,
        IconsModule,
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule,
        IconsModule,
    ],
})
export class SharedModule {}
