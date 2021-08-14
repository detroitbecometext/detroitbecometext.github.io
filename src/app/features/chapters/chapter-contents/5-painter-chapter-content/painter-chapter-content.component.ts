import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-painter-chapter-content',
    templateUrl: './painter-chapter-content.component.html',
    styleUrls: ['./painter-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PainterChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}