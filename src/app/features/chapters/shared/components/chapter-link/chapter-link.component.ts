import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ChapterService } from '@app/core/services';

@Component({
    selector: 'app-chapter-link',
    templateUrl: './chapter-link.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterLinkComponent {
    @Input() id: number;

    constructor(public readonly chapterService: ChapterService) {}
}
