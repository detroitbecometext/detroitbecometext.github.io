import { GalleryItemType } from './gallery-item-type.enum';

export class GalleryItem {
    constructor(
        public readonly id: number,
        public readonly type: GalleryItemType,
        public readonly translationKey: string,
        public readonly unused: boolean
    ) {}

    public get nameTranslationKey(): string {
        return `${this.translationKey}.NAME`;
    }

    public get text1TranslationKey(): string {
        return `${this.translationKey}.TEXT01`;
    }

    public get text2TranslationKey(): string {
        return `${this.translationKey}.TEXT02`;
    }

    public get resumeTranslationKey(): string {
        return `${this.translationKey}.RESUME`;
    }

    public get text1LabelTranslationKey(): string {
        return `GUI.GALLERY.GEN.${this.type}.TEXT01.TITLE`;
    }

    public get text2LabelTranslationKey(): string {
        return `GUI.GALLERY.GEN.${this.type}.TEXT02.TITLE`;
    }
}
