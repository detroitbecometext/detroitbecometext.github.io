import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    constructor(private snackbar: MatSnackBar) {}

    ngOnInit(): void {}

    /**
     * This function will return a language supported by formspree depending on the user's language.
     * @param navLanguage The user's navigator language.
     */
    getLanguage(navLanguage: string): string {
        let languages: string[] = [
            'ar',
            'bg',
            'ca',
            'cs',
            'da',
            'de',
            'es',
            'fi',
            'fr',
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
            'sr',
            'sv',
            'th',
            'tr',
            'uk',
            'zh-CN',
            'zh-TW',
        ];
        for (let lang of languages) {
            if (navLanguage.includes(lang)) {
                return lang;
            }
        }
        return 'en';
    }
}
