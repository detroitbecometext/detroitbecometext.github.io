import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/icons.module';
import { BaseTranslationComponent } from './base-translation/base-translation.component';

@NgModule({
    declarations: [BaseTranslationComponent],
    imports: [CommonModule, MaterialModule, RouterModule, IconsModule],
    exports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        IconsModule,
        BaseTranslationComponent,
    ],
})
export class SharedModule {}
