import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { ChapterTocService } from '../../../services/chapter-toc.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatDividerModule,
		DialogueLineComponent,
		TranslocoModule,
	],
	templateUrl: './opening-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpeningChapterContentComponent implements AfterViewInit {
	constructor(
		protected readonly translationService: TranslationService,
		protected readonly chapterTocService: ChapterTocService,
	) {}

	ngAfterViewInit(): void {
		this.chapterTocService.onChapterContentInit();
	}
}
