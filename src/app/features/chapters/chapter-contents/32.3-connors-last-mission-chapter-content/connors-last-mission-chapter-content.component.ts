import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-connors-last-mission-chapter-content',
    templateUrl: './connors-last-mission-chapter-content.component.html',
    styleUrls: ['./connors-last-mission-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnorsLastMissionChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}