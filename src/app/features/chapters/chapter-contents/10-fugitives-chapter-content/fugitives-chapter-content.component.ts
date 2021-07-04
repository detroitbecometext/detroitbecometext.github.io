import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-fugitives-chapter-content',
    templateUrl: './fugitives-chapter-content.component.html',
    styleUrls: ['./fugitives-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FugitivesChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
