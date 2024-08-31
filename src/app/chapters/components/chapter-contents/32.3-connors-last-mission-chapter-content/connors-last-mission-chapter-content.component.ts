import { CommonModule } from '@angular/common';
import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { RouterLink } from '@angular/router';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { TranslationService } from '../../../../shared/services/translation.service';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { ChapterTocService } from '../../../services/chapter-toc.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		ConditionedContentComponent,
		UnlockConditionComponent,
		DialogueLineComponent,
		RouterLink,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		MatDividerModule,
		TranslocoModule,
	],
	templateUrl: './connors-last-mission-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnorsLastMissionChapterContentComponent
	implements AfterViewInit
{
	UnlockType = UnlockType;

	constructor(
		protected readonly translationService: TranslationService,
		protected readonly chapterTocService: ChapterTocService,
	) {}

	ngAfterViewInit(): void {
		this.chapterTocService.onChapterContentInit();
	}
}
