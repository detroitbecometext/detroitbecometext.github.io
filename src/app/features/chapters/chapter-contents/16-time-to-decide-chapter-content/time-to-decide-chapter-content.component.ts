import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-time-to-decide-chapter-content',
    templateUrl: './time-to-decide-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeToDecideChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
