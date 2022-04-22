import { Component, OnInit } from '@angular/core';
import { Chapter } from '@app/core/models/chapter';
import { RelationName } from '@app/core/models/relation-name.enum';
import { RelationType } from '@app/core/models/relation-type.enum';
import { UnlockType } from '@app/core/models/unlock-type.enum';
import { ChapterService } from '@app/core/services';
import { ThemePickerService } from '@app/core/services/theme-picker.service';

@Component({
    templateUrl: './info-dialog.component.html',
})
export class InfoDialogComponent implements OnInit {
    UnlockType = UnlockType;
    RelationName = RelationName;
    RelationType = RelationType;

    public chapters: Chapter[];

    constructor(
        private chapterService: ChapterService,
        public readonly themePickerService: ThemePickerService
    ) {}

    ngOnInit(): void {
        this.chapters = this.chapterService.getAll();
    }
}
