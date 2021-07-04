import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-night-soul-connor-chapter-content',
    templateUrl: './night-soul-connor-chapter-content.component.html',
    styleUrls: ['./night-soul-connor-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NightSoulConnorChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
