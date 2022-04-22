import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemePickerService {
    private isDark: BehaviorSubject<boolean>;
    public isDark$: Observable<boolean>;

    constructor() {
        let defaultValue: boolean = false;
        if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            defaultValue = true;
        }

        this.isDark = new BehaviorSubject<boolean>(defaultValue);
        this.isDark$ = this.isDark.asObservable();
    }

    public switchTheme(): void {
        this.isDark.next(!this.isDark.value);
    }
}
