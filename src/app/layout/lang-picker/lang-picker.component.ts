import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	HostListener,
	Input,
} from '@angular/core';
import { LanguagePickerService } from '../../shared/services/language-picker.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
	selector: 'app-lang-picker',
	standalone: true,
	imports: [CommonModule, MatTooltipModule],
	templateUrl: './lang-picker.component.html',
	styleUrl: './lang-picker.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangPickerComponent {
	@Input({ required: true })
	public langPickerToggleElement: ElementRef<HTMLElement> | null = null;

	constructor(
		public readonly languagePickerService: LanguagePickerService,
		private readonly element: ElementRef,
	) {}

	@HostListener('document:click', ['$event'])
	onDocumentClicked(event: Event) {
		if (
			!this.element.nativeElement.contains(event.target as Node) &&
			!this.langPickerToggleElement?.nativeElement.contains(
				event.target as Node,
			)
		) {
			this.languagePickerService.togglePicker();
		}
	}
}
