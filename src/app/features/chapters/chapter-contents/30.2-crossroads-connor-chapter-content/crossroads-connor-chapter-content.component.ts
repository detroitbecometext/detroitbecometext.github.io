import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-crossroads-connor-chapter-content',
    templateUrl: './crossroads-connor-chapter-content.component.html',
    styleUrls: ['./crossroads-connor-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadsConnorChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
