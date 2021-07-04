import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-public-enemy-chapter-content',
    templateUrl: './public-enemy-chapter-content.component.html',
    styleUrls: ['./public-enemy-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicEnemyChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
