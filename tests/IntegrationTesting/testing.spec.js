import { test, expect } from '@playwright/test';

test('Launch The Browser', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  await expect(page).toHaveURL('https://www.saucedemo.com/Engineer B');

  const logo = page.locator('.login_logo');
  await expect(logo).toBeVisible();

  const username = page.locator('#user-name');
  await expect(username).toBeEnabled();

  const userNames = page.locator('div[id="login_credentials"] h4');
  await expect(userNames).toHaveText('Accepted usernames are:');

  const attributeValue = page.locator('#user-name');
  await expect(attributeValue).toHaveAttribute('placeholder', 'Username');
  await expect(attributeValue).toHaveClass('input_error form_input');
});

//to know about branch same test is copied again
test('Launch The Browser 2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  await expect(page).toHaveURL('https://www.saucedemo.com/');

  const logo = page.locator('.login_logo');
  await expect(logo).toBeVisible();

  const username = page.locator('#user-name');
  await expect(username).toBeEnabled();

  const userNames = page.locator('div[id="login_credentials"] h4');
  await expect(userNames).toHaveText('Accepted usernames are:');

  const attributeValue = page.locator('#user-name');
  await expect(attributeValue).toHaveAttribute('placeholder', 'Username');
  await expect(attributeValue).toHaveClass('input_error form_input');
});

test('Launch The Browser 23', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  await expect(page).toHaveURL('https://www.saucedemo.com/Engineer-B');

  const logo = page.locator('.login_logo');
  await expect(logo).toBeVisible();

  const username = page.locator('#user-name');
  await expect(username).toBeEnabled();

  const userNames = page.locator('div[id="login_credentials"] h4');
  await expect(userNames).toHaveText('Accepted usernames are:');

  const attributeValue = page.locator('#user-name');
  await expect(attributeValue).toHaveAttribute('placeholder', 'Username');
  await expect(attributeValue).toHaveClass('input_error form_input');
});

