import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-stratford-tower-chapter-content',
    templateUrl: './stratford-tower-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StratfordTowerChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
