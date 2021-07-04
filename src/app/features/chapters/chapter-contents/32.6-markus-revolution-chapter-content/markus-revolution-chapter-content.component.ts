import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-markus-revolution-chapter-content',
    templateUrl: './markus-revolution-chapter-content.component.html',
    styleUrls: ['./markus-revolution-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkusRevolutionChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
