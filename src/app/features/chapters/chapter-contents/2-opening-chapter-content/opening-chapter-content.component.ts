import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-opening-chapter-content',
    templateUrl: './opening-chapter-content.component.html',
    styleUrls: ['./opening-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpeningChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
