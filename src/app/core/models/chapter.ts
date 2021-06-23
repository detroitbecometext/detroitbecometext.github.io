import { Status } from './status.enum';
import { Type } from '@angular/core';
import { IChapterContent } from '@app/features/chapters/shared/interfaces/chapter-component.interface';
import { Character } from './character.enum';

// TODO: Remove long identifier ?

/**
 * Represents a chapter of the game.
 */
export class Chapter {
    /**
     * Create a chapter.
     * @param index - The index indicating the order of the chapter in the chapter list.
     * @param number - The number to display for this chapter.
     * @param title - The title of the chapter.
     * @param page - The name of the html page with the chapter's content.
     * @param image - The name of the image for this chapter.
     * @param status - The completion status of the chapter.
     */
    constructor(
        public readonly id: number,
        public readonly number: string,
        public readonly character: Character,
        public readonly image: string,
        public readonly status: Status,
        public readonly shortIdentifier: string,
        public readonly longIdentifier: string,
        public readonly component: Type<IChapterContent>
    ) {
        this.image = 'assets/images/' + image;
    }
}
