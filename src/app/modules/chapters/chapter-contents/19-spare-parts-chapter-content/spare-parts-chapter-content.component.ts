import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-spare-parts-chapter-content',
    templateUrl: './spare-parts-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SparePartsChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
