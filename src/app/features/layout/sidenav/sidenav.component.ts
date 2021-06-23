import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Link } from '@app/core/models';
import { ChapterService } from '@app/core/services';
import { MagazineService } from '@app/core/services/magazine.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
    @Input() sidenav: MatSidenav;
    public chapterLinks: Link[];
    public magazineLinks: Link[];

    constructor(
        private chapterService: ChapterService,
        private magazineService: MagazineService
    ) {}

    ngOnInit(): void {
        this.chapterLinks = this.chapterService
            .getChapters()
            .map(
                (c) => new Link(`GUI.MENU.CHAPTERS.${c.shortIdentifier}`, c.id)
            );

        this.magazineLinks = this.magazineService
            .getMagazines()
            .map(
                (m) =>
                    new Link(
                        `GUI.MAGAZINE.${m.translationCategory}.${m.translationKey}.TITLE`,
                        m.id
                    )
            );
    }
}
