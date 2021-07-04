import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-eden-club-chapter-content',
    templateUrl: './eden-club-chapter-content.component.html',
    styleUrls: ['./eden-club-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdenClubChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
