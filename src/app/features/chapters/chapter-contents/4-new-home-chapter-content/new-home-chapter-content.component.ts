import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-new-home-chapter-content',
    templateUrl: './new-home-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewHomeChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
