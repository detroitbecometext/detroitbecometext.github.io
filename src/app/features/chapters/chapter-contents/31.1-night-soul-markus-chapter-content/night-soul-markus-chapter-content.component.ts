import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-night-soul-markus-chapter-content',
    templateUrl: './night-soul-markus-chapter-content.component.html',
    styleUrls: ['./night-soul-markus-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NightSoulMarkusChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
