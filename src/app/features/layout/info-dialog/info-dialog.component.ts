import { Component, OnInit } from '@angular/core';
import { Chapter } from '@app/core/models/chapter';
import { ChapterService } from '@app/core/services';

@Component({
    templateUrl: './info-dialog.component.html',
    styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent implements OnInit {
    public chapters: Chapter[];

    constructor(private chapterService: ChapterService) {}

    ngOnInit(): void {
        this.chapters = this.chapterService.getAll();
    }
}
