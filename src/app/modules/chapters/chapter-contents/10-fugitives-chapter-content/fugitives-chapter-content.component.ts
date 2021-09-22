import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-fugitives-chapter-content',
    templateUrl: './fugitives-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FugitivesChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
