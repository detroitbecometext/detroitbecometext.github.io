import { Component, OnInit } from '@angular/core';
import { Chapter } from '@app/core/models';
import { DataService } from '@app/core/services';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public chapters: Chapter[];
    public note: string;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.chapters = this.dataService.getChapters();
        this.note =
            'New lines were added to chapters 14, 18, 22, 23, and 32.5, a typo was fixed in chapter 23 and a new contributor was added to the credits.';
    }
}
