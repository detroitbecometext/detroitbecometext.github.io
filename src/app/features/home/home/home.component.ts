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
            'The site has been rewritten from scratch. The full source code is now available on GitHub, instead of only the dist files.';
    }
}
