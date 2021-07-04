import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-russian-roulette-chapter-content',
    templateUrl: './russian-roulette-chapter-content.component.html',
    styleUrls: ['./russian-roulette-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RussianRouletteChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
