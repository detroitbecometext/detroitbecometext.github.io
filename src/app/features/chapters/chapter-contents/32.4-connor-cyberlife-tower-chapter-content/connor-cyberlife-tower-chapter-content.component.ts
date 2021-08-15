import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-connor-cyberlife-tower-chapter-content',
    templateUrl: './connor-cyberlife-tower-chapter-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnorCyberlifeTowerChapterContentComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
