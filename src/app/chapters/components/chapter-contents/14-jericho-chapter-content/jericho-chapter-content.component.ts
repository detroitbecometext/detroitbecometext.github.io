import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		DialogueLineComponent,
		ConditionedContentComponent,
		RouterLink,
		TranslocoModule,
	],
	templateUrl: './jericho-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JerichoChapterContentComponent {
	constructor(protected readonly translationService: TranslationService) {}
}