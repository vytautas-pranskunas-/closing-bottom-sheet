import { expect, test } from '@playwright/test';

test('has title', async ({ page, baseURL }) => {
    console.log('baseURL:', baseURL);
    await page.goto(baseURL!);

    // Expect a title "to contain" a substring.
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Hello, parama');
});

/* test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}); */
