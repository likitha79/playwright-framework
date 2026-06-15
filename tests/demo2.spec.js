const { test, expect } = require('@playwright/test');

test('Amazon Laptop Search', async ({ page }) => {

  await page.goto('https://www.amazon.in/');
  await page.locator('#twotabsearchtextbox').fill('laptop');
  await page.locator('#nav-search-submit-button').click();
  await page.waitForTimeout(3000);
  await page.locator('.a-link-normal.s-no-outline').first().click();
  await page.waitForLoadState('load');
  console.log(await page.title());

});