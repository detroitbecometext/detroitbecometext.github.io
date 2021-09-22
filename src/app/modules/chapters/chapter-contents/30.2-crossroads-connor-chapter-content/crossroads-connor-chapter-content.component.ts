import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-crossroads-connor-chapter-content',
    templateUrl: './crossroads-connor-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadsConnorChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
