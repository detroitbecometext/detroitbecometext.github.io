import { Component, OnInit } from '@angular/core';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-chloe',
    templateUrl: './chloe.component.html',
    styleUrls: ['./chloe.component.scss'],
})
export class ChloeComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
