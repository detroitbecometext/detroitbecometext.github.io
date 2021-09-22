import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-last-chance-connor-chapter-content',
    templateUrl: './last-chance-connor-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastChanceConnorChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
