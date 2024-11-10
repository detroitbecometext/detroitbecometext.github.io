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
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { UnusedContentComponent } from '../../../../shared/components/unused-content/unused-content.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { ChapterTocService } from '../../../../shared/services/chapter-toc.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		RelationComponent,
		UnusedContentComponent,
		TranslocoModule,
	],
	templateUrl: './time-to-decide-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeToDecideChapterContentComponent implements AfterViewInit {
	RelationName = RelationName;
	RelationType = RelationType;

	constructor(
		protected readonly translationService: TranslationService,
		protected readonly chapterTocService: ChapterTocService,
	) {}

	ngAfterViewInit(): void {
		this.chapterTocService.onChapterContentInit();
	}
}
