import { MagazineType } from './magazine-type.enum';

export class Magazine {
    constructor(
        public readonly id: number,
        public readonly type: MagazineType,
        public readonly translationCategory: string,
        public readonly translationKey: string,
        public readonly subHeadlineTranslationCategory: string
    ) {}
}
