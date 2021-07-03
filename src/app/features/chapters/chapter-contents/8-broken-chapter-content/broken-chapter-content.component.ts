import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-broken-chapter-content',
    templateUrl: './broken-chapter-content.component.html',
    styleUrls: ['./broken-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
