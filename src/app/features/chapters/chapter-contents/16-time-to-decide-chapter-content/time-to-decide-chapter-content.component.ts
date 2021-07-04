import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-time-to-decide-chapter-content',
    templateUrl: './time-to-decide-chapter-content.component.html',
    styleUrls: ['./time-to-decide-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeToDecideChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
