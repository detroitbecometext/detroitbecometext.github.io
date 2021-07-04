import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-capitol-park-chapter-content',
    templateUrl: './capitol-park-chapter-content.component.html',
    styleUrls: ['./capitol-park-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapitolParkChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
