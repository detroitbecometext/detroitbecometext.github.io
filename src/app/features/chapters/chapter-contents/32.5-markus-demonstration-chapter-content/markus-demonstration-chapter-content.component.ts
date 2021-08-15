import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-markus-demonstration-chapter-content',
    templateUrl: './markus-demonstration-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkusDemonstrationChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
