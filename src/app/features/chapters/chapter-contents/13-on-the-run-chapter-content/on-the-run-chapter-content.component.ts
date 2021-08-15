import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-on-the-run-chapter-content',
    templateUrl: './on-the-run-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnTheRunChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
