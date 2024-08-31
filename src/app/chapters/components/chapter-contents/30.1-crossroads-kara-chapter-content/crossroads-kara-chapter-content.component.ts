import { CommonModule } from '@angular/common';
import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { MatDividerModule } from '@angular/material/divider';
import { ScreensComponent } from '../30-crossroads-intro/screens/screens.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { RouterLink } from '@angular/router';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { BackgroundDialoguesComponent } from '../30-crossroads-intro/background-dialogues/background-dialogues.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { ChapterTocService } from '../../../services/chapter-toc.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatDividerModule,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		ConditionedContentComponent,
		UnlockConditionComponent,
		RelationComponent,
		ScreensComponent,
		BackgroundDialoguesComponent,
		RouterLink,
		TranslocoModule,
	],
	templateUrl: './crossroads-kara-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossroadsKaraChapterContentComponent implements AfterViewInit {
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
