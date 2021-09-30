import { Component, OnInit } from '@angular/core';
import { Chapter, Status } from '@app/core/models';
import { ChapterService } from '@app/core/services';

@Component({
    templateUrl: './info-dialog.component.html',
    styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent implements OnInit {
    public chapters: Chapter[];

    Status = Status;

    constructor(private chapterService: ChapterService) {}

    ngOnInit(): void {
        this.chapters = this.chapterService.getChapters();
    }
}
