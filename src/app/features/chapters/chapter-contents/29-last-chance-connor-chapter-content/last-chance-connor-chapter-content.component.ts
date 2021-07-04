import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-last-chance-connor-chapter-content',
    templateUrl: './last-chance-connor-chapter-content.component.html',
    styleUrls: ['./last-chance-connor-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LastChanceConnorChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
