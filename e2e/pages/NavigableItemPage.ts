import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NavigableItemPage extends BasePage {
	constructor(
		private readonly url: string,
		page: Page,
	) {
		super(page);
	}

	public async goToId(chapterId: number): Promise<void> {
		await this.goTo(`/${this.url}/${chapterId}`);
	}
}
