import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
	faBars,
	faHome,
	faQuestion,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { LanguagePickerService } from '../../shared/services/language-picker.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { LangPickerComponent } from '../lang-picker/lang-picker.component';
import { LangPickerToggleComponent } from '../lang-picker-toggle/lang-picker-toggle.component';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { TextDirectionService } from '../../shared/services/text-direction.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		CommonModule,
		FontAwesomeModule,
		RouterLink,
		ThemeToggleComponent,
		LangPickerComponent,
		LangPickerToggleComponent,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input({ required: true }) sidenav: MatSidenav | null = null;

	faBars = faBars;
	faHome = faHome;
	faQuestion = faQuestion;
	faEnvelope = faEnvelope;

	constructor(
		private readonly dialog: MatDialog,
		public readonly languagePickerService: LanguagePickerService,
		public readonly textDirectionService: TextDirectionService,
	) {}

	openDialog() {
		this.dialog.open(InfoDialogComponent, {
			width: '600px',
			autoFocus: false,
		});
	}
}
