import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/components/base-translation/base-translation.component';

@Component({
    selector: 'app-the-bridge-chapter-content',
    templateUrl: './the-bridge-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheBridgeChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
