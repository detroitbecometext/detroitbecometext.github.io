import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-stratford-tower-chapter-content',
    templateUrl: './stratford-tower-chapter-content.component.html',
    styleUrls: ['./stratford-tower-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StratfordTowerChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
