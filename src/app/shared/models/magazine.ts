import { DataItem } from './data-item';
import { MagazineType } from '../enums/magazine-type.enum';

export class Magazine extends DataItem {
	constructor(
		id: number,
		public readonly type: MagazineType,
		public readonly translationCategory: string,
		public readonly translationKey: string,
		public readonly subHeadlineTranslationCategory: string,
	) {
		super(id);
	}

	private get baseTranslationKey(): string {
		return `GUI.MAGAZINE.${this.translationCategory}.${this.translationKey}`;
	}

	public get titleTranslationKey(): string {
		return `${this.baseTranslationKey}.TITLE`;
	}

	public get subtitleTranslationKey(): string {
		return `${this.baseTranslationKey}.SUBTITLE`;
	}

	public get article1TranslationKey(): string {
		return `${this.baseTranslationKey}.ARTICLE1`;
	}

	public get article2TranslationKey(): string {
		return `${this.baseTranslationKey}.ARTICLE2`;
	}

	public get subheadlineTranslationKey(): string {
		return `GUI.MAGAZINE.${this.subHeadlineTranslationCategory}.SUBHEADLINE`;
	}
}
