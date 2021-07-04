import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-jericho-chapter-content',
    templateUrl: './jericho-chapter-content.component.html',
    styleUrls: ['./jericho-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JerichoChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
