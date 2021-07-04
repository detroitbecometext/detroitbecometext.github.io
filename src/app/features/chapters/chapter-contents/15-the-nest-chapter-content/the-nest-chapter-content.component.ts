import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-the-nest-chapter-content',
    templateUrl: './the-nest-chapter-content.component.html',
    styleUrls: ['./the-nest-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheNestChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
