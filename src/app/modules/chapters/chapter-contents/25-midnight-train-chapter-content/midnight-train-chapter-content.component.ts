import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-midnight-train-chapter-content',
    templateUrl: './midnight-train-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MidnightTrainChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
