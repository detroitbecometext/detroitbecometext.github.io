import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { ConditionedContentComponent } from '../../../../shared/components/conditioned-content/conditioned-content.component';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
	selector: 'app-press-dirty-bomb',
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		DialogueLineComponent,
		ConditionedContentComponent,
		TranslocoModule,
	],
	templateUrl: './press-dirty-bomb.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PressDirtyBombComponent {
	constructor(protected readonly translationService: TranslationService) {}
}