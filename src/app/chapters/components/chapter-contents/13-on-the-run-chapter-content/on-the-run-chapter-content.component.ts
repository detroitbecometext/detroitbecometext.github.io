import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { MatDividerModule } from '@angular/material/divider';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { RouterLink } from '@angular/router';
import { UnusedContentComponent } from '../../../../shared/components/unused-content/unused-content.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';
import { CommonTranslationKey } from '../../../../shared/utils/common-translation-keys.enum';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';

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
		UnusedContentComponent,
		RouterLink,
		TranslocoModule,
	],
	templateUrl: './on-the-run-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnTheRunChapterContentComponent {
	UnlockType = UnlockType;
	CommonTranslationKey = CommonTranslationKey;
	RelationName = RelationName;
	RelationType = RelationType;

	constructor(protected readonly translationService: TranslationService) {}
}