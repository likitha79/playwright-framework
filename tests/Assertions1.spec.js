const { test, expect } = require('@playwright/test');

test('Assertions', async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#name").fill("Test User"); 
    await page.locator("#email").fill("Test Email");
    await expect.soft( page.locator("#name")).toHaveValue("Test User1");   

    await page.locator("#gender").check();
    await expect.soft(page.locator("#gender")).toBeChecked();

    await page.locator("#hobbies").check();
    await expect.soft(page.locator("#hobbies")).toBeChecked();
})