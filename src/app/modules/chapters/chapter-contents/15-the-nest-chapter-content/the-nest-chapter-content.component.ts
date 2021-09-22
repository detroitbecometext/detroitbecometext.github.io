import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-the-nest-chapter-content',
    templateUrl: './the-nest-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheNestChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
