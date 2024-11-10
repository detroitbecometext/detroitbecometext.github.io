import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ThemePickerService {
	private readonly storageKey = 'DBHT.THEME';

	private readonly isDark: BehaviorSubject<boolean>;
	public readonly isDark$: Observable<boolean>;

	constructor() {
		let isDark = false;

		const storedValue: string | null = localStorage.getItem(
			this.storageKey,
		);
		if (storedValue !== null) {
			isDark = JSON.parse(storedValue);
		} else if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			isDark = true;
		}

		this.isDark = new BehaviorSubject<boolean>(isDark);
		this.isDark$ = this.isDark.asObservable();
	}

	public switchTheme(): void {
		const newValue = !this.isDark.value;

		this.isDark.next(newValue);
		localStorage.setItem(this.storageKey, JSON.stringify(newValue));
	}
}
