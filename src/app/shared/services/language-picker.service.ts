import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { BehaviorSubject, Observable } from 'rxjs';

type Language = {
	lang: string;
	flag: string;
	label: string;
};

@Injectable({
	providedIn: 'root',
})
export class LanguagePickerService {
	private readonly activeFlag: BehaviorSubject<string> =
		new BehaviorSubject<string>('en');
	private readonly showPicker: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);

	public readonly activeFlag$: Observable<string> =
		this.activeFlag.asObservable();
	public readonly showPicker$: Observable<boolean> =
		this.showPicker.asObservable();

	public readonly supportedLanguages: Language[];
	private readonly langToFlagMapping: Map<string, string>;

	constructor(private translocoService: TranslocoService) {
		this.langToFlagMapping = new Map([
			['ar', 'arab'],
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
			['zh-cn', 'cn'],
			['zh-tw', 'tw'],
		]);

		this.translocoService.langChanges$.subscribe((lang) =>
			this.updateCurrentFlag(lang),
		);

		this.updateCurrentFlag(this.translocoService.getActiveLang());

		this.supportedLanguages = (
			this.translocoService.getAvailableLangs() as {
				id: string;
				label: string;
			}[]
		).map((l: { id: string; label: string }) => {
			return {
				flag: this.getFlagForLang(l.id),
				lang: l.id,
				label: l.label,
			};
		});
	}

	private getFlagForLang(langId: string): string {
		return this.langToFlagMapping.has(langId)
			? (this.langToFlagMapping.get(langId) ?? langId)
			: langId;
	}

	private updateCurrentFlag(langId: string): void {
		this.activeFlag.next(this.getFlagForLang(langId));
	}

	public changeLanguage(lang: string): void {
		this.translocoService.setActiveLang(lang);
		this.showPicker.next(false);
	}

	public togglePicker() {
		this.showPicker.next(!this.showPicker.value);
	}
}
