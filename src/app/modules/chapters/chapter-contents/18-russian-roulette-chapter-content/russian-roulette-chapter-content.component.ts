import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-russian-roulette-chapter-content',
    templateUrl: './russian-roulette-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RussianRouletteChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
