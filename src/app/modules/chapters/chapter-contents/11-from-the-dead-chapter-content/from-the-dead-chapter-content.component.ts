import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-from-the-dead-chapter-content',
    templateUrl: './from-the-dead-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromTheDeadChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
