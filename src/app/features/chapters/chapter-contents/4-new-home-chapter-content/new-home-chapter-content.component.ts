import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-new-home-chapter-content',
    templateUrl: './new-home-chapter-content.component.html',
    styleUrls: ['./new-home-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewHomeChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
