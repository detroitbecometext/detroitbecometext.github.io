import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-pirates-cove-chapter-content',
    templateUrl: './pirates-cove-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PiratesCoveChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
