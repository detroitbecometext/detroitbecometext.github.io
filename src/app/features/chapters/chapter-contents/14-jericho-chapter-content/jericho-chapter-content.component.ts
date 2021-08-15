import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-jericho-chapter-content',
    templateUrl: './jericho-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JerichoChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
