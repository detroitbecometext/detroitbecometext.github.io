import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface ILanguage {
    lang: string;
    flag: string;
    label: string;
}

@Injectable({
    providedIn: 'root',
})
export class LanguagePickerService {
    public activeFlag: BehaviorSubject<string> = new BehaviorSubject('en');
    public showPicker: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public activeFlag$: Observable<string> = this.activeFlag.asObservable();
    public showPicker$: Observable<boolean> = this.showPicker.asObservable();

    public supportedLanguages: ILanguage[];
    private langToFlagMapping: Map<string, string>;

    constructor(private translocoService: TranslocoService) {
        this.langToFlagMapping = new Map([
            ['ar', 'sa'],
            ['en', 'us'],
            ['da', 'dk'],
            ['ja', 'jp'],
            ['ko', 'kr'],
            ['zh', 'cn'],
            ['el', 'gr'],
            ['cs', 'cz'],
            ['pt-br', 'br'],
            ['es-mx', 'mx'],
            ['sv', 'se'],
        ]);

        this.translocoService.langChanges$.subscribe((lang) =>
            this.updateCurrentFlag(lang)
        );

        this.updateCurrentFlag(this.translocoService.getActiveLang());

        this.supportedLanguages = (
            this.translocoService.getAvailableLangs() as {
                id: string;
                label: string;
            }[]
        ).map((l: { id: string; label: string }) => {
            return {
                flag: this.langToFlagMapping.has(l.id)
                    ? this.langToFlagMapping.get(l.id)
                    : l.id,
                lang: l.id,
                label: l.label,
            };
        });
    }

    private updateCurrentFlag(langId: string): void {
        let nextFlagId = this.langToFlagMapping.has(langId)
            ? this.langToFlagMapping.get(langId)
            : langId;

        this.activeFlag.next(nextFlagId);
    }

    public changeLanguage(lang: string): void {
        this.translocoService.setActiveLang(lang);
    }

    public togglePicker() {
        this.showPicker.next(!this.showPicker.value);
    }
}
