import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-endings',
    templateUrl: './endings.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndingsComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
