import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-kara-leaving-detroit-chapter-content',
    templateUrl: './kara-leaving-detroit-chapter-content.component.html',
    styleUrls: ['./kara-leaving-detroit-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KaraLeavingDetroitChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
