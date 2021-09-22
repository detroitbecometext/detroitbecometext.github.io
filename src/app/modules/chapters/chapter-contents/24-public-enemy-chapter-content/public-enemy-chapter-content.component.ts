import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-public-enemy-chapter-content',
    templateUrl: './public-enemy-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicEnemyChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
