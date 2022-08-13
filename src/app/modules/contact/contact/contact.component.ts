import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, throwError } from 'rxjs';
import { debounceTime, delay, finalize } from 'rxjs/operators';
import { ContactForm } from '../shared/forms/contact.form';

@Component({
    templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
    private endpoint: string = 'https://formspree.io/f/xleoogop';
    private languages: string[] = [
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

    public contactForm: FormGroup<ContactForm>;
    public sending$: BehaviorSubject<boolean>;

    constructor(
        private snackbar: MatSnackBar,
        private http: HttpClient,
        private readonly formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.sending$ = new BehaviorSubject(false);

        this.contactForm = this.formBuilder.nonNullable.group<ContactForm>({
            name: new FormControl(''),
            message: new FormControl('', Validators.required),
            _replyto: new FormControl('', Validators.email),
            _language: new FormControl('en', Validators.required),
        });
        this.contactForm.patchValue({
            _language: this.getLanguage(),
        });
    }

    /**
     * This function will return a language supported by formspree depending on the user's language.
     */
    getLanguage(): string {
        const userLanguages = this.languages.filter((l) =>
            navigator.language.includes(l)
        );
        return userLanguages.length > 0 ? userLanguages[0] : 'en';
    }

    sendMessage() {
        this.sending$.next(true);
        this.http
            .post(this.endpoint, this.contactForm.value)
            .pipe(finalize(() => this.sending$.next(false)))
            .subscribe(
                (val) =>
                    this.snackbar.open(
                        'Message sent successfully. Thank you!',
                        '',
                        {
                            duration: 4000,
                        }
                    ),
                (err) => {
                    this.snackbar.open(
                        'An error occurred while sending the message. Please try again later.',
                        '',
                        {
                            panelClass: 'snackbar-error',
                            duration: 4000,
                        }
                    );
                }
            );
    }
}
