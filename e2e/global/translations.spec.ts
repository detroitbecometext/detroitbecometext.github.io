import { test, expect } from '@playwright/test';

// Test one language to check there are no translations that are only in english
const langs = [{ id: 'ar', label: 'Arabic' }];

for (const language of langs) {
	for (let chapterId = 1; chapterId <= 40; chapterId++) {
		test(`Chapter ${chapterId} should have valid ${language.id} translations`, async ({
			page,
		}) => {
			const errors: string[] = [];

			page.on('console', (msg) => {
				if (
					msg.type() === 'warning' &&
					msg.text().includes('Missing translation')
				) {
					errors.push(msg.text());
				}
			});

			await page.goto(`/chapters/${chapterId}`);

			await page
				.getByRole('button', { name: 'Toggle language picker' })
				.click();
			await page
				.getByRole('button', {
					name: `Change language to ${language.label}`,
				})
				.click();

			// Wait for the console errors to be caught
			await page.waitForTimeout(1000);

			expect(errors).toHaveLength(0);
		});
	}
}
