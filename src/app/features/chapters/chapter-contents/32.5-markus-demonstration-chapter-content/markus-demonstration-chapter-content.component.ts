import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-markus-demonstration-chapter-content',
    templateUrl: './markus-demonstration-chapter-content.component.html',
    styleUrls: ['./markus-demonstration-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkusDemonstrationChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
