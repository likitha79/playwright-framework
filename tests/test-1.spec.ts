import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  //await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('button', { name: 'Back to top' }).click();
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('link', { name: 'New Releases' }).click();
  await page.locator('.a-link-normal.aok-block').first().click();
});