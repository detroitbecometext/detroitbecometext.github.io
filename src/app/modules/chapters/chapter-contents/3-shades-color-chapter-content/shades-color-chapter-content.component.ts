import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-shades-color-chapter-content',
    templateUrl: './shades-color-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadesColorChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
