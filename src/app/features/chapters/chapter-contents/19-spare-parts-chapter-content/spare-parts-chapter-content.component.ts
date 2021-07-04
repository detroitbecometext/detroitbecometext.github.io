import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-spare-parts-chapter-content',
    templateUrl: './spare-parts-chapter-content.component.html',
    styleUrls: ['./spare-parts-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SparePartsChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
