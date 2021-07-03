import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseTranslationComponent } from '@app/shared/base-translation/base-translation.component';

@Component({
    selector: 'app-the-bridge-chapter-content',
    templateUrl: './the-bridge-chapter-content.component.html',
    styleUrls: ['./the-bridge-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheBridgeChapterContentComponent
    extends BaseTranslationComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
