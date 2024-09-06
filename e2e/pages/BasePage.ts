import { expect } from '@playwright/test';
import { Page } from '@playwright/test';

export class BasePage {
	constructor(protected readonly page: Page) {}

	public async goTo(url: string): Promise<void> {
		await this.page.goto(url);
		await this.waitForLanguageLoad();
	}

	protected async waitForLanguageLoad(): Promise<void> {
		await expect(
			this.page.getByRole('progressbar', { name: 'Loading' }),
		).toHaveCount(0);
	}
}
