import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-meet-kamski-chapter-content',
    templateUrl: './meet-kamski-chapter-content.component.html',
    styleUrls: ['./meet-kamski-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetKamskiChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
