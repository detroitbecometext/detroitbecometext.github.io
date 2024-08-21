import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';
import { map, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TextDirectionService {
	public readonly isRtl$: Observable<boolean>;

	constructor(private readonly translocoService: TranslocoService) {
		this.isRtl$ = this.translocoService.langChanges$.pipe(
			takeUntilDestroyed(),
			map(this.isRtlLanguage),
		);
	}

	public isRtl(): boolean {
		return this.isRtlLanguage(this.translocoService.getActiveLang());
	}

	private isRtlLanguage(lang: string): boolean {
		return lang === 'ar';
	}
}
