import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { RouterLink } from '@angular/router';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { MatDividerModule } from '@angular/material/divider';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';

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
		RelationComponent,
		RouterLink,
		UnlockConditionComponent,
		TranslocoModule,
	],
	templateUrl: './public-enemy-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicEnemyChapterContentComponent {
	UnlockType = UnlockType;
	RelationName = RelationName;
	RelationType = RelationType;

	constructor(protected readonly translationService: TranslationService) {}
}