import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { Chapter, ChapterNav } from '@app/core/models';
import { DataService } from '@app/core/services';

@Component({
    selector: 'app-chapter-nav',
    templateUrl: './chapter-nav.component.html',
    styleUrls: ['./chapter-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterNavComponent implements OnInit {
    public chapterNav: ChapterNav;
    public chapter: Chapter;

    @Input('chapter') set setChapter(value: Chapter) {
        if (value) {
            this.chapter = value;
            this.chapterNav = new ChapterNav(
                this.dataService.getPreviousChapterId(value.id),
                this.dataService.getNextChapterId(value.id),
                this.dataService.getPreviousChapterId(
                    value.id,
                    value.character
                ),
                this.dataService.getNextChapterId(value.id, value.character)
            );
        }
    }
    constructor(private readonly dataService: DataService) {}

    ngOnInit(): void {}
}
