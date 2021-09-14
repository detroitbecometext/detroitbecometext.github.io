import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { Chapter } from '@app/core/models/chapter';
import { ChapterNav } from '@app/core/models/chapter-nav';
import { ChapterService } from '@app/core/services';

@Component({
    selector: 'app-chapter-nav',
    templateUrl: './chapter-nav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterNavComponent {
    public chapterNav: ChapterNav;
    public currentChapter: Chapter;

    @Input() set chapter(value: Chapter) {
        if (value) {
            this.currentChapter = value;
            this.chapterNav = new ChapterNav(
                this.chapterService.getPreviousChapterId(value.id),
                this.chapterService.getNextChapterId(value.id),
                this.chapterService.getPreviousChapterId(
                    value.id,
                    value.character
                ),
                this.chapterService.getNextChapterId(value.id, value.character)
            );
        }
    }

    constructor(private readonly chapterService: ChapterService) {}
}
