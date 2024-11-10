import { expect, Page, test } from '@playwright/test';
import { NavigableItemPage } from '../pages/NavigableItemPage';

async function testNavigation(
	page: Page,
	baseURL: string | undefined,
	startId: number,
	expectedId: number,
	keyToPress: string,
	rtl: boolean,
): Promise<void> {
	const currentPage = new NavigableItemPage('chapters', page);
	await currentPage.goToId(startId);

	if (rtl) {
		await currentPage.changeLanguage('Arabic');
	}

	await page.keyboard.press(keyToPress);

	expect(page.url()).toBe(`${baseURL}/chapters/${expectedId}`);
}

test.describe('Right arrow key navigation', () => {
	const key = 'ArrowRight';

	test('Should go to the next chapter', async ({ page, baseURL }) => {
		await testNavigation(page, baseURL, 6, 7, key, false);
	});

	test('Should go to the previous chapter when RTL', async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 6, 5, key, true);
	});

	test("Should do nothing when it's the last chapter", async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 40, 40, key, false);
	});
});

test.describe('Ctrl + Right arrow key navigation', () => {
	const key = 'Control+ArrowRight';

	test('Should go to the next character chapter', async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 6, 9, key, false);
	});

	test('Should go to the previous character chapter when RTL', async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 6, 1, key, true);
	});

	test("Should do nothing when it's the last chapter for the character", async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 38, 38, key, false);
	});
});

test.describe('Left arrow key navigation', () => {
	const key = 'ArrowLeft';

	test('Should go to the previous chapter', async ({ page, baseURL }) => {
		await testNavigation(page, baseURL, 6, 5, key, false);
	});

	test('Should go to the next chapter when RTL', async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 6, 7, key, true);
	});

	test("Should do nothing when it's the first chapter", async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 1, 1, key, false);
	});
});

test.describe('Ctrl + Left arrow key navigation', () => {
	const key = 'Control+ArrowLeft';

	test('Should go to the previous character chapter', async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 6, 1, key, false);
	});

	test('Should go to the next character chapter when RTL', async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 6, 9, key, true);
	});

	test("Should do nothing when it's the first chapter for the character", async ({
		page,
		baseURL,
	}) => {
		await testNavigation(page, baseURL, 2, 2, key, false);
	});
});
