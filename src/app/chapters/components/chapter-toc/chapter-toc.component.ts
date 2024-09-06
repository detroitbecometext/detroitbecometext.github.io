import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { ChapterTocService } from '../../../shared/services/chapter-toc.service';

@Component({
	selector: 'app-chapter-toc',
	standalone: true,
	imports: [CommonModule, MatCardModule, MatDividerModule, RouterLink],
	templateUrl: './chapter-toc.component.html',
	styleUrl: './chapter-toc.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterTocComponent {
	@Input({ required: true }) cardClasses: string = '';
	@Input() focusable: boolean = true;

	constructor(
		public readonly chapterTocService: ChapterTocService,
		public readonly router: Router,
	) {}
}
