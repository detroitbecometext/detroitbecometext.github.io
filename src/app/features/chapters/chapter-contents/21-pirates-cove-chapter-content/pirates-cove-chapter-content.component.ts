import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-pirates-cove-chapter-content',
    templateUrl: './pirates-cove-chapter-content.component.html',
    styleUrls: ['./pirates-cove-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PiratesCoveChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
