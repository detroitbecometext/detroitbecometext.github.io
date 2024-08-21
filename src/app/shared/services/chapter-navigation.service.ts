import { computed, Injectable, Signal } from '@angular/core';
import { ItemNavigationService } from './item-navigation.service';
import { Chapter } from '../models/chapter';
import { ChapterService } from './chapter.service';
import { Router } from '@angular/router';
import { TextDirectionService } from './text-direction.service';

@Injectable()
export class ChapterNavigationService extends ItemNavigationService<Chapter> {
	public readonly previousCharacterChapterId: Signal<number | null> =
		computed<number | null>(() => {
			const item = this.currentItem();

			if (item === null) {
				return null;
			}

			return this.chapterService.getPreviousCharacterChapterId(
				item.id,
				item.character,
			);
		});

	public readonly nextCharacterChapterId: Signal<number | null> = computed<
		number | null
	>(() => {
		const item = this.currentItem();

		if (item === null) {
			return null;
		}

		return this.chapterService.getNextCharacterChapterId(
			item.id,
			item.character,
		);
	});

	constructor(
		private readonly chapterService: ChapterService,
		router: Router,
		textDirectionService: TextDirectionService,
	) {
		super(chapterService, '/chapters', router, textDirectionService);
	}
}
