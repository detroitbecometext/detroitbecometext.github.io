import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-markus-revolution-chapter-content',
    templateUrl: './markus-revolution-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkusRevolutionChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
