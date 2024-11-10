import { test, expect } from '@playwright/test';
import { NavigableItemPage } from '../pages/NavigableItemPage';
import { fail } from 'assert';

for (let chapterId = 1; chapterId <= 40; chapterId++) {
	test(`Chapter ${chapterId} should have ids defined for all headings`, async ({
		page,
	}) => {
		const currentPage = new NavigableItemPage('chapters', page);
		await currentPage.goToId(chapterId);

		for (const heading of await page
			.locator('.chapter-content')
			.getByRole('heading')
			.all()) {
			await expect(heading).toHaveAttribute('id');
		}
	});

	test(`Chapter ${chapterId} should have labelled sections`, async ({
		page,
	}) => {
		const currentPage = new NavigableItemPage('chapters', page);
		await currentPage.goToId(chapterId);

		for (const section of await page.locator('section').all()) {
			await expect(section).toHaveAttribute('aria-labelledby');

			const sectionHeader = section.getByRole('heading').first();
			const sectionHeaderId = await sectionHeader.getAttribute('id');
			const sectionLabelledBy =
				await section.getAttribute('aria-labelledby');

			expect(sectionHeaderId).toBe(sectionLabelledBy);
		}
	});

	test(`Chapter ${chapterId} should not have nested paragraphs`, async ({
		page,
	}) => {
		const currentPage = new NavigableItemPage('chapters', page);
		await currentPage.goToId(chapterId);

		const paragraphsWithParagraphs = await page
			.locator('p', { has: page.locator('p') })
			.all();

		expect(paragraphsWithParagraphs).toHaveLength(0);
	});

	test(`Chapter ${chapterId} should have section for every heading`, async ({
		page,
	}) => {
		const currentPage = new NavigableItemPage('chapters', page);
		await currentPage.goToId(chapterId);

		const headingCount = await page
			.locator('.chapter-content')
			.getByRole('heading')
			.count();
		const sectionCount = await page
			.locator('.chapter-content')
			.getByRole('region')
			.count();

		expect(headingCount).toBe(sectionCount);
	});

	test(`Chapter ${chapterId} should have a condition group for each condition content`, async ({
		page,
	}) => {
		const currentPage = new NavigableItemPage('chapters', page);
		await currentPage.goToId(chapterId);

		const conditionContents = await page
			.locator('app-conditioned-content')
			.all();

		const errors = [];

		for (const conditionContent of conditionContents) {
			const parent = conditionContent.locator('..');
			const parentTagName = await parent.evaluate((e) => e.tagName);

			if (parentTagName !== 'APP-CONDITION-GROUP') {
				const conditionText = await conditionContent
					.locator('.condition')
					.first()
					.textContent();

				errors.push(
					`Condition "${conditionText}" is not inside a condition group`,
				);
			}
		}

		if (errors.length > 0) {
			fail(errors.join('\n'));
		}
	});
}
