import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-the-interrogation-chapter-content',
    templateUrl: './the-interrogation-chapter-content.component.html',
    styleUrls: ['./the-interrogation-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheInterrogationChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
