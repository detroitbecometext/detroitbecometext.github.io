import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-shades-color-chapter-content',
    templateUrl: './shades-color-chapter-content.component.html',
    styleUrls: ['./shades-color-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadesColorChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
