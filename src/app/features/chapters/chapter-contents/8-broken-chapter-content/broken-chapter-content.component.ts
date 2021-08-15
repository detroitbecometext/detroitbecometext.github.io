import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-broken-chapter-content',
    templateUrl: './broken-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
