import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-kara-captured-chapter-content',
    templateUrl: './kara-captured-chapter-content.component.html',
    styleUrls: ['./kara-captured-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KaraCapturedChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
