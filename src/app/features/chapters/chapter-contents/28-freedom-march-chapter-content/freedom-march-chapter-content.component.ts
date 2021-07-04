import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-freedom-march-chapter-content',
    templateUrl: './freedom-march-chapter-content.component.html',
    styleUrls: ['./freedom-march-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreedomMarchChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
