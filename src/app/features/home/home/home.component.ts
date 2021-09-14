import { Component, OnInit } from '@angular/core';
import { Chapter } from '@app/core/models/chapter';
import { ChapterService } from '@app/core/services';
import { LanguagePickerService } from '@app/core/services/language-picker.service';

class AdditionalLink {
    img: string;
    alt: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
}

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public chapters: Chapter[];
    public additionalLinks: AdditionalLink[];

    constructor(
        private chapterService: ChapterService,
        public readonly languagePickerService: LanguagePickerService
    ) {}

    ngOnInit(): void {
        this.chapters = this.chapterService.getAll();
        this.additionalLinks = [
            {
                img: 'assets/images/cyberlife.webp',
                alt: 'CyberLife logo',
                title: 'CYBERLIFE',
                subtitle: 'Discord server',
                description: 'A discord server for Detroit: Become Human fans.',
                link: 'https://discord.gg/8t3JcDf',
            },
            {
                img: 'assets/images/wikiaLogo.jpg',
                alt: 'Detroit: Become human wikia logo',
                title: 'Detroit: Become Human Wiki',
                subtitle: 'Fan-written wiki',
                description:
                    'The best source of information about Detroit: Become Human, written for fans, by fans.',
                link: 'https://detroit-become-human.fandom.com/wiki/Main_Page',
            },
            {
                img: 'https://styles.redditmedia.com/t5_3ajb0/styles/communityIcon_sitp3wnsi1a41.png',
                alt: 'Subreddit icon',
                title: 'Detroit: Become Human Subreddit',
                subtitle: 'r/DetroitBecomeHuman',
                description: 'A subreddit dedicated to Detroit: Become Human.',
                link: 'https://www.reddit.com/r/DetroitBecomeHuman/',
            },
        ];
    }
}
