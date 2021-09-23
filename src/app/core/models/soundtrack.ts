import { DataItem } from './data-item';

export class Soundtrack extends DataItem {
    constructor(id: number) {
        super(id);
    }

    private get baseTranslationKey(): string {
        return `GUI.MENU.EXTRA.SOUNDTRACK.${this.id
            .toString()
            .padStart(2, '0')}`;
    }

    public get titleTranslationKey(): string {
        return `${this.baseTranslationKey}.TITLE`;
    }

    public get trackTranslationKey(): string {
        return `${this.baseTranslationKey}.TRACK`;
    }

    public get descriptionTranslationKey(): string {
        return `${this.baseTranslationKey}.DESCRIPTION`;
    }

    public get artistTranslationKey(): string {
        return `${this.baseTranslationKey}.ARTIST`;
    }
}
