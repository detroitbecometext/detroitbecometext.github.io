import { test } from '@playwright/test';
import { fail } from 'assert';

for (let chapterId = 1; chapterId <= 40; chapterId++) {
	test(`Chapter ${chapterId} should have ids defined for all headings`, async ({
		page,
	}) => {
		await page.goto(`/chapters/${chapterId}`);
		await page.locator('#chapter-title').isVisible();

		const headings = await page
			.locator('.chapter-content')
			.getByRole('heading')
			.all();

		for (const heading of headings) {
			const id = await heading.getAttribute('id');

			if (id === null || id === '') {
				fail('Heading without id: ' + (await heading.textContent()));
			}
		}
	});
}
