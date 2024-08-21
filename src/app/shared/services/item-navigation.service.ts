import {
	computed,
	Inject,
	Injectable,
	InjectionToken,
	signal,
	Signal,
	WritableSignal,
} from '@angular/core';
import { DataItem } from '../models/data-item';
import { Router } from '@angular/router';
import { BaseDataService } from './base-data-service';
import { TextDirectionService } from './text-direction.service';

export const DATA_SERVICE_TOKEN = new InjectionToken<BaseDataService<never>>(
	'DataService',
);

export const ITEM_URL_TOKEN = new InjectionToken<string>('ItemUrl');

@Injectable()
export class ItemNavigationService<T extends DataItem> {
	public readonly currentItem: WritableSignal<T | null> = signal<T | null>(
		null,
	);

	public readonly previousItemId: Signal<number | null> = computed<
		number | null
	>(() => {
		const item = this.currentItem();

		if (item === null) {
			return null;
		}

		return this.dataService.get(item.id - 1)?.id ?? null;
	});

	public readonly nextItemId: Signal<number | null> = computed<number | null>(
		() => {
			const item = this.currentItem();

			if (item === null) {
				return null;
			}

			return this.dataService.get(item.id + 1)?.id ?? null;
		},
	);

	constructor(
		@Inject(DATA_SERVICE_TOKEN)
		private readonly dataService: BaseDataService<T>,
		@Inject(ITEM_URL_TOKEN)
		private readonly itemUrl: string,
		private readonly router: Router,
		private readonly textDirectionService: TextDirectionService,
	) {}

	public onPathIdChanged(idParam: string | null): void {
		if (idParam === null) {
			this.router.navigate(['not-found']);
			return;
		}

		const itemId: number = +idParam;
		const item = this.dataService.get(itemId);

		if (item === undefined) {
			this.router.navigate(['not-found']);
			return;
		}

		this.currentItem.set(item);
	}

	public onNavigationEvent(event: KeyboardEvent): void {
		const item = this.currentItem();

		if (item === null) {
			return;
		}

		let newId: number | null = null;
		if (event.key == 'ArrowRight') {
			newId = item.id + (this.textDirectionService.isRtl() ? -1 : 1);
		} else if (event.key == 'ArrowLeft') {
			newId = item.id + (this.textDirectionService.isRtl() ? 1 : -1);
		} else {
			return;
		}

		event.stopImmediatePropagation();

		const itemExists = this.dataService.get(newId) !== undefined;

		if (newId !== null && itemExists) {
			this.router.navigate([this.itemUrl, newId]);
		}
	}
}
