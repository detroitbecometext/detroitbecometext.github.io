import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-crossroads-kara-chapter-content',
    templateUrl: './crossroads-kara-chapter-content.component.html',
    styleUrls: ['./crossroads-kara-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadsKaraChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
