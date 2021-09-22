import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-capitol-park-chapter-content',
    templateUrl: './capitol-park-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapitolParkChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
