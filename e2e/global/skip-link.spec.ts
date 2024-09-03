import { expect, test } from '@playwright/test';

test('Skip link should be hidden by default', async ({ page }) => {
	await page.goto('/chapters/1');

	const skipLink = page.getByRole('link', { name: 'Skip to main content' });

	await expect(skipLink).not.toBeInViewport();

	await page.keyboard.press('Tab');

	await expect(skipLink).toBeInViewport();
	await expect(skipLink).toBeVisible();
});

const pages = [
	{
		url: '/chapters',
		label: 'Chapter',
	},
	{
		url: '/chapters/endings',
		label: 'Chapter endings',
	},
	{
		url: '/magazines',
		label: 'Magazines',
	},
	{
		url: '/gallery',
		label: 'Gallery',
	},
	{
		url: '/soundtrack',
		label: 'Soundtrack',
	},
	{
		url: '/chloe',
		label: 'Chloe',
	},
	{
		url: '/warming',
		label: 'Warming',
	},
	{
		url: '/contact',
		label: 'Contacts',
	},
	{
		url: '/credits',
		label: 'Credits',
	},
];

pages.forEach(({ url, label }) => {
	test(`${label} page should have a functional skip link`, async ({
		page,
	}) => {
		await page.goto(url);
		await page.keyboard.press('Tab');

		await expect(
			page.getByRole('link', { name: 'Skip to main content' }),
		).toBeFocused();

		await page.keyboard.press('Enter');

		await expect(page.locator('#main-content')).toBeFocused();
	});
});
