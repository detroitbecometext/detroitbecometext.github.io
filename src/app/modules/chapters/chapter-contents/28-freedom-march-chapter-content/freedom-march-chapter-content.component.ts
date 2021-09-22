import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-freedom-march-chapter-content',
    templateUrl: './freedom-march-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreedomMarchChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
