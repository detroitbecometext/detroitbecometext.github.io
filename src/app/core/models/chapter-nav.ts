export class ChapterNav {
    constructor(
        public readonly previousChapterId: number,
        public readonly nextChapterId: number,
        public readonly previousCharacterChapterId: number,
        public readonly nextCharacterChapterId: number
    ) {}
}
