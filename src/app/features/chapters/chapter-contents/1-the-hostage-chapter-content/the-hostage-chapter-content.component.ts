import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RelationType } from '@app/core/models/relation-type.enum';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-the-hostage-chapter-content',
    templateUrl: './the-hostage-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheHostageChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
