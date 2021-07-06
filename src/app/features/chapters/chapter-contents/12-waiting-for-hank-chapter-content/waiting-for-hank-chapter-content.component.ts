import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-waiting-for-hank-chapter-content',
    templateUrl: './waiting-for-hank-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingForHankChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
