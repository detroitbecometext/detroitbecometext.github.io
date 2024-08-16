import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { UnusedContentComponent } from '../../../../shared/components/unused-content/unused-content.component';
import { RelationComponent } from '../../../../shared/components/relation/relation.component';
import { MatDividerModule } from '@angular/material/divider';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { PressDirtyBombComponent } from '../press-dirty-bomb/press-dirty-bomb.component';
import { TranslationService } from '../../../../shared/services/translation.service';
import { RelationName } from '../../../../shared/enums/relation-name.enum';
import { RelationType } from '../../../../shared/enums/relation-type.enum';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		DialogueLineComponent,
		ConditionedContentComponent,
		ChoiceItemComponent,
		ChoiceGroupComponent,
		UnusedContentComponent,
		RelationComponent,
		MatDividerModule,
		UnlockConditionComponent,
		PressDirtyBombComponent,
		TranslocoModule,
	],
	templateUrl: './markus-revolution-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkusRevolutionChapterContentComponent {
	UnlockType = UnlockType;
	RelationName = RelationName;
	RelationType = RelationType;

	constructor(protected readonly translationService: TranslationService) {}
}
