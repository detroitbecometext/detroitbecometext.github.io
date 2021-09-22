import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-eden-club-chapter-content',
    templateUrl: './eden-club-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdenClubChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
