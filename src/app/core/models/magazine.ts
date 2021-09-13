import { MagazineType } from './magazine-type.enum';

export class Magazine {
    constructor(
        public readonly id: number,
        public readonly type: MagazineType,
        public readonly translationCategory: string,
        public readonly translationKey: string,
        public readonly subHeadlineTranslationCategory: string
    ) {}

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
