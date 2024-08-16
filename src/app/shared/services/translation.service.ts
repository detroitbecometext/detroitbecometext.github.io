import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { map, Observable } from 'rxjs';

@Injectable()
export class TranslationService {
	private readonly translatedObjects: Map<string, Observable<string>> =
		new Map<string, Observable<string>>();

	constructor(private readonly translocoService: TranslocoService) {}

	public translateObject(
		translationKey: string,
		startIndex: number | null = null,
		endIndex: number | null = null,
		separator: string = ' ',
	): Observable<string> {
		const key = this.getKey(translationKey, startIndex, endIndex);

		if (!this.translatedObjects.has(key)) {
			this.translatedObjects.set(
				key,
				this.getTranslationObservable(
					translationKey,
					startIndex,
					endIndex,
					separator,
				),
			);
		}

		return this.translatedObjects.get(key)!;
	}

	private getTranslationObservable(
		translationKey: string,
		startIndex: number | null = null,
		endIndex: number | null = null,
		separator: string = ' ',
	): Observable<string> {
		return this.translocoService.selectTranslateObject(translationKey).pipe(
			map((value) => {
				if (typeof value === 'string') {
					console.error(`${translationKey} is not an object.`);
					return '';
				}

				return Object.values(value)
					.slice(startIndex ?? undefined, endIndex ?? undefined)
					.join(separator);
			}),
		);
	}

	private getKey(
		translationKey: string,
		startIndex: number | null,
		endIndex: number | null,
	) {
		return `${translationKey}_${[startIndex, endIndex].join('-')}`;
	}
}
