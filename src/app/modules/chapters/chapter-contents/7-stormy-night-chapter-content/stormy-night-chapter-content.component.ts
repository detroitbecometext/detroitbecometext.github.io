import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-stormy-night-chapter-content',
    templateUrl: './stormy-night-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StormyNightChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
