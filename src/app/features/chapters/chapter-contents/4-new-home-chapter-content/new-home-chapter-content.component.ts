import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { RelationType } from '@app/core/models/relation-type.enum';

@Component({
    selector: 'app-new-home-chapter-content',
    templateUrl: './new-home-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewHomeChapterContentComponent extends BaseTranslationComponent {
    RelationType = RelationType;
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
