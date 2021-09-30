import { Injectable } from '@angular/core';
import { Chapter, Status, Character, Magazine } from '../models';

import { TheHostageChapterContentComponent } from '@app/features/chapters/chapter-contents/1-the-hostage-chapter-content/the-hostage-chapter-content.component';
import { OpeningChapterContentComponent } from '@app/features/chapters/chapter-contents/2-opening-chapter-content/opening-chapter-content.component';
import { ShadesColorChapterContentComponent } from '@app/features/chapters/chapter-contents/3-shades-color-chapter-content/shades-color-chapter-content.component';
import { NewHomeChapterContentComponent } from '@app/features/chapters/chapter-contents/4-new-home-chapter-content/new-home-chapter-content.component';
import { PainterChapterContentComponent } from '@app/features/chapters/chapter-contents/5-painter-chapter-content/painter-chapter-content.component';
import { PartnersChapterContentComponent } from '@app/features/chapters/chapter-contents/6-partners-chapter-content/partners-chapter-content.component';
import { StormyNightChapterContentComponent } from '@app/features/chapters/chapter-contents/7-stormy-night-chapter-content/stormy-night-chapter-content.component';
import { BrokenChapterContentComponent } from '@app/features/chapters/chapter-contents/8-broken-chapter-content/broken-chapter-content.component';
import { TheInterrogationChapterContentComponent } from '@app/features/chapters/chapter-contents/9-the-interrogation-chapter-content/the-interrogation-chapter-content.component';
import { FugitivesChapterContentComponent } from '@app/features/chapters/chapter-contents/10-fugitives-chapter-content/fugitives-chapter-content.component';
import { FromTheDeadChapterContentComponent } from '@app/features/chapters/chapter-contents/11-from-the-dead-chapter-content/from-the-dead-chapter-content.component';
import { WaitingForHankChapterContentComponent } from '@app/features/chapters/chapter-contents/12-waiting-for-hank-chapter-content/waiting-for-hank-chapter-content.component';
import { OnTheRunChapterContentComponent } from '@app/features/chapters/chapter-contents/13-on-the-run-chapter-content/on-the-run-chapter-content.component';
import { JerichoChapterContentComponent } from '@app/features/chapters/chapter-contents/14-jericho-chapter-content/jericho-chapter-content.component';
import { TheNestChapterContentComponent } from '@app/features/chapters/chapter-contents/15-the-nest-chapter-content/the-nest-chapter-content.component';
import { TimeToDecideChapterContentComponent } from '@app/features/chapters/chapter-contents/16-time-to-decide-chapter-content/time-to-decide-chapter-content.component';
import { ZlatkoChapterContentComponent } from '@app/features/chapters/chapter-contents/17-zlatko-chapter-content/zlatko-chapter-content.component';
import { RussianRouletteChapterContentComponent } from '@app/features/chapters/chapter-contents/18-russian-roulette-chapter-content/russian-roulette-chapter-content.component';
import { SparePartsChapterContentComponent } from '@app/features/chapters/chapter-contents/19-spare-parts-chapter-content/spare-parts-chapter-content.component';
import { EdenClubChapterContentComponent } from '@app/features/chapters/chapter-contents/20-eden-club-chapter-content/eden-club-chapter-content.component';
import { PiratesCoveChapterContentComponent } from '@app/features/chapters/chapter-contents/21-pirates-cove-chapter-content/pirates-cove-chapter-content.component';
import { TheBridgeChapterContentComponent } from '@app/features/chapters/chapter-contents/22-the-bridge-chapter-content/the-bridge-chapter-content.component';
import { StratfordTowerChapterContentComponent } from '@app/features/chapters/chapter-contents/23-stratford-tower-chapter-content/stratford-tower-chapter-content.component';
import { PublicEnemyChapterContentComponent } from '@app/features/chapters/chapter-contents/24-public-enemy-chapter-content/public-enemy-chapter-content.component';
import { MidnightTrainChapterContentComponent } from '@app/features/chapters/chapter-contents/25-midnight-train-chapter-content/midnight-train-chapter-content.component';
import { CapitolParkChapterContentComponent } from '@app/features/chapters/chapter-contents/26-capitol-park-chapter-content/capitol-park-chapter-content.component';
import { MeetKamskiChapterContentComponent } from '@app/features/chapters/chapter-contents/27-meet-kamski-chapter-content/meet-kamski-chapter-content.component';
import { FreedomMarchChapterContentComponent } from '@app/features/chapters/chapter-contents/28-freedom-march-chapter-content/freedom-march-chapter-content.component';
import { LastChanceConnorChapterContentComponent } from '@app/features/chapters/chapter-contents/29-last-chance-connor-chapter-content/last-chance-connor-chapter-content.component';
import { CrossroadsKaraChapterContentComponent } from '@app/features/chapters/chapter-contents/30.1-crossroads-kara-chapter-content/crossroads-kara-chapter-content.component';
import { CrossroadsConnorChapterContentComponent } from '@app/features/chapters/chapter-contents/30.2-crossroads-connor-chapter-content/crossroads-connor-chapter-content.component';
import { CrossroadsMarkusChapterContentComponent } from '@app/features/chapters/chapter-contents/30.3-crossroads-markus-chapter-content/crossroads-markus-chapter-content.component';
import { NightSoulMarkusChapterContentComponent } from '@app/features/chapters/chapter-contents/31.1-night-soul-markus-chapter-content/night-soul-markus-chapter-content.component';
import { NightSoulConnorChapterContentComponent } from '@app/features/chapters/chapter-contents/31.2-night-soul-connor-chapter-content/night-soul-connor-chapter-content.component';
import { KaraLeavingDetroitChapterContentComponent } from '@app/features/chapters/chapter-contents/32.1-kara-leaving-detroit-chapter-content/kara-leaving-detroit-chapter-content.component';
import { KaraCapturedChapterContentComponent } from '@app/features/chapters/chapter-contents/32.2-kara-captured-chapter-content/kara-captured-chapter-content.component';
import { ConnorsLastMissionChapterContentComponent } from '@app/features/chapters/chapter-contents/32.3-connors-last-mission-chapter-content/connors-last-mission-chapter-content.component';
import { ConnorCyberlifeTowerChapterContentComponent } from '@app/features/chapters/chapter-contents/32.4-connor-cyberlife-tower-chapter-content/connor-cyberlife-tower-chapter-content.component';
import { MarkusDemonstrationChapterContentComponent } from '@app/features/chapters/chapter-contents/32.5-markus-demonstration-chapter-content/markus-demonstration-chapter-content.component';
import { MarkusRevolutionChapterContentComponent } from '@app/features/chapters/chapter-contents/32.6-markus-revolution-chapter-content/markus-revolution-chapter-content.component';

@Injectable({
    providedIn: 'root',
})
export class ChapterService {
    private chapters: Chapter[];

    constructor() {
        // Create all the chapters
        let i = 1;
        this.chapters = [
            new Chapter(
                i++,
                '1',
                Character.Connor,
                'Chapter1.jpg',
                Status.Done,
                '01C',
                'X0101X',
                TheHostageChapterContentComponent
            ),
            new Chapter(
                i++,
                '2',
                Character.Kara,
                'Chapter2.jpg',
                Status.Done,
                '01KA',
                '',
                OpeningChapterContentComponent
            ),
            new Chapter(
                i++,
                '3',
                Character.Markus,
                'Chapter3.jpg',
                Status.Done,
                '01MA',
                '',
                ShadesColorChapterContentComponent
            ),
            new Chapter(
                i++,
                '4',
                Character.Kara,
                'Chapter4.jpg',
                Status.Done,
                '01KB',
                '',
                NewHomeChapterContentComponent
            ),
            new Chapter(
                i++,
                '5',
                Character.Markus,
                'Chapter5.jpg',
                Status.Done,
                '01MB',
                '',
                PainterChapterContentComponent
            ),
            new Chapter(
                i++,
                '6',
                Character.Connor,
                'Chapter6.jpg',
                Status.Done,
                '02C',
                '',
                PartnersChapterContentComponent
            ),
            new Chapter(
                i++,
                '7',
                Character.Kara,
                'Chapter7.jpg',
                Status.Done,
                '02K',
                '',
                StormyNightChapterContentComponent
            ),
            new Chapter(
                i++,
                '8',
                Character.Markus,
                'Chapter8.jpg',
                Status.Done,
                '02M',
                '',
                BrokenChapterContentComponent
            ),
            new Chapter(
                i++,
                '9',
                Character.Connor,
                'Chapter9.jpg',
                Status.Done,
                '04C',
                '',
                TheInterrogationChapterContentComponent
            ),
            new Chapter(
                i++,
                '10',
                Character.Kara,
                'Chapter10.jpg',
                Status.InProgress,
                '03K',
                '',
                FugitivesChapterContentComponent
            ),
            new Chapter(
                i++,
                '11',
                Character.Markus,
                'Chapter11.jpg',
                Status.Done,
                '03M',
                '',
                FromTheDeadChapterContentComponent
            ),
            new Chapter(
                i++,
                '12',
                Character.Connor,
                'Chapter12.jpg',
                Status.Done,
                '03C',
                '',
                WaitingForHankChapterContentComponent
            ),
            new Chapter(
                i++,
                '13',
                Character.Kara,
                'Chapter13.jpg',
                Status.Done,
                '04K',
                '',
                OnTheRunChapterContentComponent
            ),
            new Chapter(
                i++,
                '14',
                Character.Markus,
                'Chapter14.jpg',
                Status.Done,
                '05M',
                '',
                JerichoChapterContentComponent
            ),
            new Chapter(
                i++,
                '15',
                Character.Connor,
                'Chapter15.jpg',
                Status.Done,
                '05C',
                '',
                TheNestChapterContentComponent
            ),
            new Chapter(
                i++,
                '16',
                Character.Markus,
                'Chapter16.jpg',
                Status.Done,
                '06MA',
                '',
                TimeToDecideChapterContentComponent
            ),
            new Chapter(
                i++,
                '17',
                Character.Kara,
                'Chapter17.jpg',
                Status.Done,
                '05K',
                '',
                ZlatkoChapterContentComponent
            ),
            new Chapter(
                i++,
                '18',
                Character.Connor,
                'Chapter18.jpg',
                Status.Done,
                '06CA',
                '',
                RussianRouletteChapterContentComponent
            ),
            new Chapter(
                i++,
                '19',
                Character.Markus,
                'Chapter19.jpg',
                Status.Done,
                '06MB',
                '',
                SparePartsChapterContentComponent
            ),
            new Chapter(
                i++,
                '20',
                Character.Connor,
                'Chapter20.jpg',
                Status.Done,
                '06CB',
                '',
                EdenClubChapterContentComponent
            ),
            new Chapter(
                i++,
                '21',
                Character.Kara,
                'Chapter21.jpg',
                Status.Done,
                '07K',
                '',
                PiratesCoveChapterContentComponent
            ),
            new Chapter(
                i++,
                '22',
                Character.Connor,
                'Chapter22.jpg',
                Status.Done,
                '08C',
                '',
                TheBridgeChapterContentComponent
            ),
            new Chapter(
                i++,
                '23',
                Character.Markus,
                'Chapter23.jpg',
                Status.Done,
                '07M',
                '',
                StratfordTowerChapterContentComponent
            ),
            new Chapter(
                i++,
                '24',
                Character.Connor,
                'Chapter24.jpg',
                Status.Done,
                '09C',
                '',
                PublicEnemyChapterContentComponent
            ),
            new Chapter(
                i++,
                '25',
                Character.Kara,
                'Chapter25.jpg',
                Status.Done,
                '08K',
                '',
                MidnightTrainChapterContentComponent
            ),
            new Chapter(
                i++,
                '26',
                Character.Markus,
                'Chapter26.jpg',
                Status.InProgress,
                '08M',
                '',
                CapitolParkChapterContentComponent
            ),
            new Chapter(
                i++,
                '27',
                Character.Connor,
                'Chapter27.jpg',
                Status.Done,
                '11C',
                '',
                MeetKamskiChapterContentComponent
            ),
            new Chapter(
                i++,
                '28',
                Character.Markus,
                'Chapter28.jpg',
                Status.InProgress,
                '10M',
                '',
                FreedomMarchChapterContentComponent
            ),
            new Chapter(
                i++,
                '29',
                Character.Connor,
                'Chapter29.jpg',
                Status.Done,
                '12C',
                '',
                LastChanceConnorChapterContentComponent
            ),
            new Chapter(
                i++,
                '30.1',
                Character.Kara,
                'Chapter30.jpg',
                Status.Done,
                '02AK',
                '',
                CrossroadsKaraChapterContentComponent
            ),
            new Chapter(
                i++,
                '30.2',
                Character.Connor,
                'Chapter30.jpg',
                Status.Done,
                '02AC',
                '',
                CrossroadsConnorChapterContentComponent
            ),
            new Chapter(
                i++,
                '30.3',
                Character.Markus,
                'Chapter30.jpg',
                Status.Done,
                '02AM',
                '',
                CrossroadsMarkusChapterContentComponent
            ),
            new Chapter(
                i++,
                '31.1',
                Character.Markus,
                'Chapter31.jpg',
                Status.Done,
                '03A.MARKUS',
                '',
                NightSoulMarkusChapterContentComponent
            ),
            new Chapter(
                i++,
                '31.2',
                Character.Connor,
                'Chapter31.jpg',
                Status.InProgress,
                '03A.CONNOR',
                '',
                NightSoulConnorChapterContentComponent
            ),
            new Chapter(
                i++,
                '32.1',
                Character.Kara,
                'Chapter32.1.jpg',
                Status.InProgress,
                '04AKA',
                '',
                KaraLeavingDetroitChapterContentComponent
            ),
            new Chapter(
                i++,
                '32.2',
                Character.Kara,
                'Chapter32.2.jpg',
                Status.InProgress,
                '04AKB',
                '',
                KaraCapturedChapterContentComponent
            ),
            new Chapter(
                i++,
                '32.3',
                Character.Connor,
                'Chapter32.3.jpg',
                Status.Done,
                '04ACA',
                '',
                ConnorsLastMissionChapterContentComponent
            ),
            new Chapter(
                i++,
                '32.4',
                Character.Connor,
                'Chapter32.4.jpg',
                Status.Done,
                '04ACB',
                '',
                ConnorCyberlifeTowerChapterContentComponent
            ),
            new Chapter(
                i++,
                '32.5',
                Character.Markus,
                'Chapter32.5.jpg',
                Status.Done,
                '04AMB',
                '',
                MarkusDemonstrationChapterContentComponent
            ),
            new Chapter(
                i++,
                '32.6',
                Character.Markus,
                'Chapter32.6.jpg',
                Status.InProgress,
                '04AMA',
                '',
                MarkusRevolutionChapterContentComponent
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
