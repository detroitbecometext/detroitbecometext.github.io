import { Type } from '@angular/core';
import { IChapterContent } from '@app/features/chapters/shared/interfaces/chapter-component.interface';
import { Character } from './character.enum';
import { DataItem } from './data-item';

/**
 * Represents a chapter of the game.
 */
export class Chapter extends DataItem {
    /**
     * Create a chapter.
     * @param id - The index indicating the order of the chapter in the chapter list.
     * @param number - The number to display for this chapter.
     * @param character - The playable character for this chapter.
     * @param image - The name of the image for this chapter.
     * @param shortIdentifier - The short translation identifier for this chapter.
     * @param component - The type of component to load in the chapter page.
     */
    constructor(
        id: number,
        public readonly number: string,
        public readonly character: Character,
        public readonly image: string,
        public readonly shortIdentifier: string,
        public readonly component: Type<IChapterContent>
    ) {
        super(id);

        this.image = 'assets/images/' + image;
    }

    public get titleTranslationKey(): string {
        return `GUI.MENU.CHAPTERS.${this.shortIdentifier}`;
    }
}
