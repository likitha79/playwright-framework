const { test, expect } = require('@playwright/test');

test('Launch The Browser', async ({ page }) => {
    await page.goto('https://www.google.com/');

    const titleName = await page.title();
    console.log(titleName);

    expect(titleName).toBe('Google');
});