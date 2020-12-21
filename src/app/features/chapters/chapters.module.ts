import { NgModule } from '@angular/core';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChapterComponent } from './chapter/chapter.component';
import { SharedModule } from '@app/shared/shared.module';
import { OpeningChapterContentComponent } from './components/opening-chapter-content/opening-chapter-content.component';
import { TheHostageChapterContentComponent } from './components/the-hostage-chapter-content/the-hostage-chapter-content.component';

@NgModule({
    declarations: [ChapterComponent, OpeningChapterContentComponent, TheHostageChapterContentComponent],
    imports: [SharedModule, ChaptersRoutingModule],
})
export class ChaptersModule {}
