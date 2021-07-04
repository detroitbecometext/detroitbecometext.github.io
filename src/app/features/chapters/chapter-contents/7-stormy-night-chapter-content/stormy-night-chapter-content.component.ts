import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-stormy-night-chapter-content',
    templateUrl: './stormy-night-chapter-content.component.html',
    styleUrls: ['./stormy-night-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StormyNightChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
