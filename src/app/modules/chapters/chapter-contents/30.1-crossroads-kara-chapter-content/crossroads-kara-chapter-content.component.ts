import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-crossroads-kara-chapter-content',
    templateUrl: './crossroads-kara-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadsKaraChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
