import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-from-the-dead-chapter-content',
    templateUrl: './from-the-dead-chapter-content.component.html',
    styleUrls: ['./from-the-dead-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromTheDeadChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
