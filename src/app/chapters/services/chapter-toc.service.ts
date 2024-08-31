import { Injectable, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';
import { filter } from 'rxjs';
import { TocItem } from '../models/toc-item';

@Injectable({
	providedIn: 'root',
})
export class ChapterTocService {
	private readonly items: WritableSignal<TocItem[]> = signal([]);
	public readonly items$ = this.items.asReadonly();

	private translationReady = false;

	constructor(private readonly translocoService: TranslocoService) {
		this.translocoService.events$
			.pipe(
				takeUntilDestroyed(),
				filter((e) => e.type === 'translationLoadSuccess'),
			)
			.subscribe(() => {
				this.translationReady = true;
				this.loadItems();
			});
	}

	public onChapterContentInit(): void {
		if (this.translationReady) {
			this.loadItems();
		}
	}

	private loadItems(): void {
		// Set a timeout to let the content be displayed
		setTimeout(() => {
			this.items.set(this.getItems());
		}, 10);
	}

	private getItems(): TocItem[] {
		const chapterContentNode = document.querySelector(
			'.chapter-content ng-component',
		);

		if (chapterContentNode === null) {
			return [];
		}

		const items = Array.from(
			chapterContentNode.querySelectorAll('h1, h2, h3'),
		).map((element) => {
			const item: TocItem = {
				name: this.formatTitle(element.textContent ?? ''),
				level: parseInt(element.tagName.slice(1), 10),
				id: element.id,
			};

			return item;
		});

		for (const item of items.filter((i) => i.id === '')) {
			console.warn(`No id for item: ${item.name}`);
		}

		return items;
	}

	private formatTitle(title: string): string {
		// Remove special characters and trim
		return title.replace(/[-[\]]/g, '').trim();
	}
}
