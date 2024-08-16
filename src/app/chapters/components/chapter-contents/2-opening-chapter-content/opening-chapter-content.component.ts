import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [
		CommonModule,
		MatDividerModule,
		DialogueLineComponent,
		TranslocoModule,
	],
	templateUrl: './opening-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpeningChapterContentComponent {
	constructor(protected readonly translationService: TranslationService) {}
}
