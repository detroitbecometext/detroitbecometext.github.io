import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TextDirectionService } from '../../../shared/services/text-direction.service';

type ContactForm = {
	name: FormControl<string>;
	message: FormControl<string>;
	_replyto: FormControl<string>;
	_language: FormControl<string>;
};

@Component({
	standalone: true,
	imports: [
		CommonModule,
		FontAwesomeModule,
		ReactiveFormsModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
	],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
	private readonly endpoint: string = 'https://formspree.io/f/xleoogop';
	private readonly languages: string[] = [
		'ar',
		'bg',
		'ca',
		'cs',
		'da',
		'de',
		'es',
		'et',
		'fi',
		'fr',
		'hr',
		'hu',
		'id',
		'is',
		'it',
		'ja',
		'ko',
		'lt',
		'nl',
		'no',
		'pl',
		'pt-BR',
		'pt-PT',
		'ru',
		'sk',
		'sl',
		'sr',
		'sv',
		'th',
		'tr',
		'uk',
		'zh-CN',
		'zh-TW',
	];

	public readonly contactForm: FormGroup<ContactForm>;
	public readonly sending$: BehaviorSubject<boolean>;

	faPaperPlane = faPaperPlane;

	constructor(
		private readonly snackbar: MatSnackBar,
		private readonly http: HttpClient,
		private readonly formBuilder: FormBuilder,
		public readonly textDirectionService: TextDirectionService,
	) {
		this.sending$ = new BehaviorSubject(false);

		this.contactForm = this.formBuilder.nonNullable.group<ContactForm>({
			name: new FormControl('', { nonNullable: true }),
			message: new FormControl('', {
				nonNullable: true,
				validators: Validators.required,
			}),
			_replyto: new FormControl('', {
				nonNullable: true,
				validators: Validators.email,
			}),
			_language: new FormControl(this.getLanguage(), {
				nonNullable: true,
				validators: Validators.required,
			}),
		});
	}

	/**
	 * This function will return a language supported by formspree depending on the user's language.
	 */
	getLanguage(): string {
		const userLanguages = this.languages.filter((l) =>
			navigator.language.includes(l),
		);
		return userLanguages.length > 0 ? userLanguages[0] : 'en';
	}

	sendMessage() {
		this.sending$.next(true);
		this.http.post(this.endpoint, this.contactForm.value).subscribe({
			next: () => {
				this.snackbar.open(
					'Message sent successfully. Thank you!',
					'',
					{
						duration: 4000,
					},
				);
			},
			error: (err) => {
				console.error(err);
				this.snackbar.open(
					'An error occurred while sending the message. Please try again later.',
					'',
					{
						panelClass: 'snackbar-error',
						duration: 4000,
					},
				);
			},
			complete: () => {
				this.sending$.next(false);
			},
		});
	}
}
