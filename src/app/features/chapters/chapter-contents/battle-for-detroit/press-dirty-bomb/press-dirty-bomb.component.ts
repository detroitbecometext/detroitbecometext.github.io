import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-press-dirty-bomb',
    templateUrl: './press-dirty-bomb.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PressDirtyBombComponent extends BaseTranslationComponent {
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }
}
