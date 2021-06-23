import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseChapterContentComponent } from '../../shared/components/base-chapter-content/base-chapter-content.component';

@Component({
    selector: 'app-opening-chapter-content',
    templateUrl: './opening-chapter-content.component.html',
    styleUrls: ['./opening-chapter-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpeningChapterContentComponent
    extends BaseChapterContentComponent
    implements OnInit
{
    constructor(translocoService: TranslocoService) {
        super(translocoService);
    }

    ngOnInit(): void {}
}
