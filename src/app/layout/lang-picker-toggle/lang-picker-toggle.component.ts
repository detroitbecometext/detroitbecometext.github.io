import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LanguagePickerService } from '../../shared/services/language-picker.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-lang-picker-toggle',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './lang-picker-toggle.component.html',
	styleUrl: './lang-picker-toggle.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangPickerToggleComponent {
	@Input() switchCaretColor: boolean = false;

	faAngleUp = faAngleUp;

	constructor(public readonly languagePickerService: LanguagePickerService) {}
}
