import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-the-interrogation-chapter-content',
    templateUrl: './the-interrogation-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheInterrogationChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
