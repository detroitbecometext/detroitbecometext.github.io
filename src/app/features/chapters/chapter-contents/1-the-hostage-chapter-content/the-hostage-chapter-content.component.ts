import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-the-hostage-chapter-content',
    templateUrl: './the-hostage-chapter-content.component.html',
    styleUrls: ['./the-hostage-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheHostageChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
