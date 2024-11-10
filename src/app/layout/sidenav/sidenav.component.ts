import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Link } from '../../shared/models/link';
import { ChapterService } from '../../shared/services/chapter.service';
import { MagazineService } from '../../shared/services/magazine.service';
import { GalleryService } from '../../shared/services/gallery.service';
import { SoundtrackService } from '../../shared/services/soundtrack.service';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [
		CommonModule,
		RouterLink,
		MatExpansionModule,
		MatDividerModule,
		MatListModule,
		TranslocoModule,
	],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	@Input({ required: true }) sidenav: MatSidenav | null = null;

	public readonly chapterLinks: Link[];
	public readonly magazineLinks: Link[];
	public readonly galleryLinks: Link[];
	public readonly soundtrackLinks: Link[];

	constructor(
		private readonly chapterService: ChapterService,
		private readonly magazineService: MagazineService,
		private readonly galleryService: GalleryService,
		private readonly soundtrackService: SoundtrackService,
	) {
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
