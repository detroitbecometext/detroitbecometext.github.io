import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-night-soul-markus-chapter-content',
    templateUrl: './night-soul-markus-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NightSoulMarkusChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
