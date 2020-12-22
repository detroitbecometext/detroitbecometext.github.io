import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ContactComponent],
    imports: [
        SharedModule,
        ContactRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
})
export class ContactModule {}
