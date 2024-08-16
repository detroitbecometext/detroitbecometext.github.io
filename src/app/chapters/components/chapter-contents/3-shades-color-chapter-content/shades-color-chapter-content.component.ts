import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogueLineComponent } from '../../../../shared/components/dialogue-line/dialogue-line.component';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
	standalone: true,
	providers: [TranslationService],
	imports: [CommonModule, DialogueLineComponent, TranslocoModule],
	templateUrl: './shades-color-chapter-content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadesColorChapterContentComponent {
	constructor(protected readonly translationService: TranslationService) {}
}
