/* before deployment if we want to execute imp or critical ones then we can name as smoke 
only smoke tests can be tested before deployment */

//after the test name @smoke or @regression can be used such that those tests only can executed before deployment
//npx playwright test --grep "@Smoke" --project=chromium --headed
//npx playwright test --grep "@Regression" --project=chromium --headed

const { test, expect} = require('@playwright/test');

test.describe('Google Search Tests',()=>{
    test("Test1 : Search Playwright automation @Smoke",async({page})=>{
        await page.goto('https://www.google.com/');
        await page.fill("textarea[aria-label='Search']","Playwright Automation");
        await page.keyboard.press('Enter');
        console.log("Searched for Playwright automation");
   });

   test("Test2 : Search for Selenium @Regression",async({page})=>{
        await page.goto('https://www.google.com/');
        await page.fill("textarea[aria-label='Search']","Selenium Automation");
        await page.keyboard.press('Enter');
        console.log("Searched for Selenium automation");
   });

   test("Test3 : Search for Cypress @Smoke",async({page})=>{
        await page.goto('https://www.google.com/');
        await page.fill("textarea[aria-label='Search']","Cypress Automation");
        await page.keyboard.press('Enter');
        console.log("Searched for Cypress automation");
   });

   test("Test4 : Search for API @Regression",async({page})=>{
        await page.goto('https://www.google.com/');
        await page.fill("textarea[aria-label='Search']","API Automation");
        await page.keyboard.press('Enter');
        console.log("Searched for API automation");
   });

   test("Test5 : Search for Postman @Regression",async({page})=>{
        await page.goto('https://www.google.com/');
        await page.fill("textarea[aria-label='Search']","Postman Automation");
        await page.keyboard.press('Enter');
        console.log("Searched for Postman automation");
   });
})