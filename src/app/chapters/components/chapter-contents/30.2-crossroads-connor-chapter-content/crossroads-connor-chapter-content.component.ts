import { CommonModule } from '@angular/common';
import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ScreensComponent } from '../30-crossroads-intro/screens/screens.component';
import { BackgroundDialoguesComponent } from '../30-crossroads-intro/background-dialogues/background-dialogues.component';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { UnusedContentComponent } from '../../../../shared/components/unused-content/unused-content.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { RouterLink } from '@angular/router';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { ChapterTocService } from '../../../../shared/services/chapter-toc.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatDividerModule,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		UnusedContentComponent,
		RelationComponent,
		UnlockConditionComponent,
		ConditionedContentComponent,
		ScreensComponent,
		BackgroundDialoguesComponent,
		RouterLink,
		TranslocoModule,
	],
	templateUrl: './crossroads-connor-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadsConnorChapterContentComponent implements AfterViewInit {
	UnlockType = UnlockType;
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
