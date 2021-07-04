import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-zlatko-chapter-content',
    templateUrl: './zlatko-chapter-content.component.html',
    styleUrls: ['./zlatko-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZlatkoChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
