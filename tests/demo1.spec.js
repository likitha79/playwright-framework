const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(3000);
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Go', exact: true }).click();
});