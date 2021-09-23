import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Link } from '@app/core/models/link';
import { ChapterService } from '@app/core/services';
import { GalleryService } from '@app/core/services/gallery.service';
import { MagazineService } from '@app/core/services/magazine.service';
import { SoundtrackService } from '@app/core/services/soundtrack.service';

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
    public galleryLinks: Link[];
    public soundtrackLinks: Link[];

    constructor(
        private chapterService: ChapterService,
        private magazineService: MagazineService,
        private galleryService: GalleryService,
        private soundtrackService: SoundtrackService
    ) {}

    ngOnInit(): void {
        this.chapterLinks = this.chapterService
            .getAll()
            .map((c) => new Link(c.titleTranslationKey, c.id));

        this.magazineLinks = this.magazineService
            .getAll()
            .map((m) => new Link(m.titleTranslationKey, m.id));

        this.galleryLinks = this.galleryService
            .getAll()
            .map((m) => new Link(m.nameTranslationKey, m.id));

        this.soundtrackLinks = this.soundtrackService
            .getAll()
            .map((m) => new Link(m.titleTranslationKey, m.id));
    }
}
