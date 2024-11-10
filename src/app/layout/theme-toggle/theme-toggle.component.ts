import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	Input,
	signal,
	WritableSignal,
} from '@angular/core';
import { ThemePickerService } from '../../shared/services/theme-picker.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-theme-toggle',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule, MatTooltipModule],
	templateUrl: './theme-toggle.component.html',
	styleUrl: './theme-toggle.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
	@Input() switchIconColor: boolean = false;

	faSun = faSun;
	faMoon = faMoon;

	protected readonly tooltip: WritableSignal<string> = signal('');

	constructor(public readonly themePickerService: ThemePickerService) {
		this.themePickerService.isDark$
			.pipe(takeUntilDestroyed())
			.subscribe((isDark) =>
				this.tooltip.set(
					isDark ? 'Switch to light mode' : 'Switch to dark mode',
				),
			);
	}
}
