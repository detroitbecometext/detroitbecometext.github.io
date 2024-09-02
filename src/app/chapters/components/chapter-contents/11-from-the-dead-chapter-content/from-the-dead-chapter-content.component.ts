import { CommonModule } from '@angular/common';
import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { ChapterTocService } from '../../../services/chapter-toc.service';
import { ObservationComponent } from '../../../../shared/components/observation/observation.component';
import { ObservationItemComponent } from '../../../../shared/components/observation-item/observation-item.component';
import { UnusedContentComponent } from '../../../../shared/components/unused-content/unused-content.component';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		TranslocoModule,
		ObservationComponent,
		ObservationItemComponent,
		UnusedContentComponent,
	],
	templateUrl: './from-the-dead-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromTheDeadChapterContentComponent implements AfterViewInit {
	constructor(
		protected readonly translationService: TranslationService,
		protected readonly chapterTocService: ChapterTocService,
	) {}

	ngAfterViewInit(): void {
		this.chapterTocService.onChapterContentInit();
	}
}
