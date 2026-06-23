const { test, expect} = require('@playwright/test');


test("Price high to low",async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.selectOption(".product_sort_container",{value : 'hilo1'});
    await page.waitForTimeout(3000);
    
})