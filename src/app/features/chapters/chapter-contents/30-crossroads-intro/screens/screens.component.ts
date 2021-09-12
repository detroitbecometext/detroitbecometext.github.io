import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-screens',
    templateUrl: './screens.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreensComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
