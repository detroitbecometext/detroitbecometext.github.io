import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-background-dialogues',
    templateUrl: './background-dialogues.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundDialoguesComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
