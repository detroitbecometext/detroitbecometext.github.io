import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { ChapterTocService } from '../../services/chapter-toc.service';

@Component({
	selector: 'app-chapter-toc',
	standalone: true,
	imports: [CommonModule, MatCardModule, MatDividerModule, RouterLink],
	templateUrl: './chapter-toc.component.html',
	styleUrl: './chapter-toc.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterTocComponent {
	constructor(
		private readonly viewPortScroller: ViewportScroller,
		public readonly chapterTocService: ChapterTocService,
		public readonly router: Router,
	) {
		// Offset for fixed header so that the anchor is not hidden behind it
		this.viewPortScroller.setOffset([0, 64]);
	}
}
