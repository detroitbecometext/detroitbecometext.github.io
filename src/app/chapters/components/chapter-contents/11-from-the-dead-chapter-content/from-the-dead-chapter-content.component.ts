import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ChoiceGroupComponent } from '../../../../shared/components/choice-group/choice-group.component';
import { ChoiceItemComponent } from '../../../../shared/components/choice-item/choice-item.component';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		DialogueLineComponent,
		ChoiceGroupComponent,
		ChoiceItemComponent,
		TranslocoModule,
	],
	templateUrl: './from-the-dead-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromTheDeadChapterContentComponent {
	constructor(protected readonly translationService: TranslationService) {}
}
