import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { UnlockConditionComponent } from '../../../../shared/components/unlock-condition/unlock-condition.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { RouterLink } from '@angular/router';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { TranslationService } from '../../../../shared/services/translation.service';
import { UnlockType } from '../../../../shared/enums/unlock-type.enum';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		UnlockConditionComponent,
		ConditionedContentComponent,
		RouterLink,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		MatDividerModule,
		TranslocoModule,
	],
	templateUrl: './night-soul-connor-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NightSoulConnorChapterContentComponent {
	UnlockType = UnlockType;

	constructor(protected readonly translationService: TranslationService) {}
}
