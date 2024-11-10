import { CommonModule } from '@angular/common';
import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { MatDividerModule } from '@angular/material/divider';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { UnusedContentComponent } from '../../../../shared/components/unused-content/unused-content.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { CommonTranslationKey } from '../../../../shared/utils/common-translation-keys.enum';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { ChapterTocService } from '../../../../shared/services/chapter-toc.service';
import { RouterLink } from '@angular/router';
import { ConditionGroupComponent } from '../../../../shared/components/condition-group/condition-group.component';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatDividerModule,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		UnlockConditionComponent,
		UnusedContentComponent,
		ConditionedContentComponent,
		RelationComponent,
		TranslocoModule,
		RouterLink,
		ConditionGroupComponent,
	],
	templateUrl: './midnight-train-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MidnightTrainChapterContentComponent implements AfterViewInit {
	UnlockType = UnlockType;
	CommonTranslationKey = CommonTranslationKey;
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
