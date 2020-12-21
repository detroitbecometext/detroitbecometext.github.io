import { Injectable } from '@angular/core';
import { Chapter } from '../models/Chapter';
import { Status } from '../models/status.enum';
import { OpeningChapterContentComponent } from '@chapter-contents/opening-chapter-content/opening-chapter-content.component';
import { TheHostageChapterContentComponent } from '@chapter-contents/the-hostage-chapter-content/the-hostage-chapter-content.component';
import { Character } from '@app/core/models/character.enum';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private chapters: Chapter[];

  constructor() {
    // Create all the chapters
    let i = 0;
    this.chapters = [
      new Chapter(
        i++,
        '1',
        'The Hostage',
        Character.Connor,
        'Chapter1.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '2',
        'Opening',
        Character.Kara,
        'Chapter2.jpg',
        Status.Done,
        TheHostageChapterContentComponent
      ),
      new Chapter(
        i++,
        '3',
        'Shades of Color',
        Character.Markus,
        'Chapter3.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '4',
        'A New Home',
        Character.Kara,
        'Chapter4.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '5',
        'The Painter',
        Character.Markus,
        'Chapter5.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '6',
        'Partners',
        Character.Connor,
        'Chapter6.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '7',
        'Stormy Night',
        Character.Kara,
        'Chapter7.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '8',
        'Broken',
        Character.Markus,
        'Chapter8.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '9',
        'The Interrogation',
        Character.Connor,
        'Chapter9.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '10',
        'Fugitives',
        Character.Kara,
        'Chapter10.jpg',
        Status.InProgress,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '11',
        'From the Dead',
        Character.Markus,
        'Chapter11.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '12',
        'Waiting for Hank...',
        Character.Connor,
        'Chapter12.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '13',
        'On the Run',
        Character.Kara,
        'Chapter13.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '14',
        'Jericho',
        Character.Markus,
        'Chapter14.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '15',
        'The Nest',
        Character.Connor,
        'Chapter15.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '16',
        'Time to Decide',
        Character.Markus,
        'Chapter16.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '17',
        'Zlatko',
        Character.Kara,
        'Chapter17.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '18',
        'Russian Roulette',
        Character.Connor,
        'Chapter18.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '19',
        'Spare Parts',
        Character.Markus,
        'Chapter19.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '20',
        'The Eden Club',
        Character.Connor,
        'Chapter20.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '21',
        "The Pirates' Cove",
        Character.Kara,
        'Chapter21.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '22',
        'The Bridge',
        Character.Connor,
        'Chapter22.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '23',
        'The Stratford Tower',
        Character.Markus,
        'Chapter23.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '24',
        'Public Enemy',
        Character.Connor,
        'Chapter24.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '25',
        'Midnight Train',
        Character.Kara,
        'Chapter25.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '26',
        'Capitol Park',
        Character.Markus,
        'Chapter26.jpg',
        Status.InProgress,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '27',
        'Meet Kamski',
        Character.Connor,
        'Chapter27.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '28',
        'Freedom March',
        Character.Markus,
        'Chapter28.jpg',
        Status.InProgress,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '29',
        'Last Chance, Connor',
        Character.Connor,
        'Chapter29.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '30.1',
        'Crossroads - Kara',
        Character.Kara,
        'Chapter30.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '30.2',
        'Crossroads - Connor',
        Character.Connor,
        'Chapter30.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '30.3',
        'Crossroads - Markus',
        Character.Markus,
        'Chapter30.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '31.1',
        'Night of the Soul - Markus',
        Character.Markus,
        'Chapter31.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '31.2',
        'Night of the Soul - Connor',
        Character.Connor,
        'Chapter31.jpg',
        Status.InProgress,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '32.1',
        'Kara Leaving Detroit',
        Character.Kara,
        'Chapter32.1.jpg',
        Status.InProgress,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '32.2',
        'Kara Captured',
        Character.Kara,
        'Chapter32.2.jpg',
        Status.InProgress,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '32.3',
        "Connor's Last Mission",
        Character.Connor,
        'Chapter32.3.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '32.4',
        'Connor at the Cyberlife Tower',
        Character.Connor,
        'Chapter32.4.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '32.5',
        'Markus Demonstration',
        Character.Markus,
        'Chapter32.5.jpg',
        Status.Done,
        OpeningChapterContentComponent
      ),
      new Chapter(
        i++,
        '32.6',
        'Markus Revolution',
        Character.Markus,
        'Chapter32.6.jpg',
        Status.InProgress,
        OpeningChapterContentComponent
      ),
    ];
  }

  /**
   * Get a list of all chapters.
   */
  public getChapters(): Chapter[] {
    return this.chapters;
  }

  /**
   * Get a chapter by its id.
   * @param chapterNumber The number for the chapter.
   */
  public getChapter(id: number): Chapter {
    return this.chapters.find((chapter) => chapter.id === id);
  }

  public getNextChapterId(
    id: number,
    character: Character | null = null
  ): number | null {
    const chapters =
      character != null
        ? this.chapters.filter((c) => c.character === character)
        : this.chapters;
    const nextChapters = chapters.filter((c) => c.id > id);
    return nextChapters.length !== 0 ? nextChapters[0].id : null;
  }

  public getPreviousChapterId(
    id: number,
    character: Character | null = null
  ): number | null {
    const chapters =
      character != null
        ? this.chapters.filter((c) => c.character === character)
        : this.chapters;
    const previousChapters = chapters
      .filter((c) => c.id < id)
      .sort((a, b) => b.id - a.id);
    return previousChapters.length !== 0 ? previousChapters[0].id : null;
  }
}
