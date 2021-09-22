import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-zlatko-chapter-content',
    templateUrl: './zlatko-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZlatkoChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
