import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-crossroads-markus-chapter-content',
    templateUrl: './crossroads-markus-chapter-content.component.html',
    styleUrls: ['./crossroads-markus-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadsMarkusChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
