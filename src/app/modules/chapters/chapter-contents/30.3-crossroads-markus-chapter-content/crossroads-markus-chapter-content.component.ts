import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-crossroads-markus-chapter-content',
    templateUrl: './crossroads-markus-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadsMarkusChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
