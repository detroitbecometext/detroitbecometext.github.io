import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/icons.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialModule, RouterModule, IconsModule],
    exports: [CommonModule, MaterialModule, RouterModule, IconsModule],
})
export class SharedModule {}
