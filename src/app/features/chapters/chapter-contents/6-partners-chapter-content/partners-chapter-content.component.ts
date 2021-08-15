import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-partners-chapter-content',
    templateUrl: './partners-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
