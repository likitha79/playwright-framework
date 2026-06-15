
/* common annotations are:

test.describe= groups related tests
test.skip=skips a test,skipping a test because its not relevant in the current version
test.only=runs only this test,ignoring others,running only this test(useful for debugging)

test.fixme=marks a test as expected to fail,temporarily ignoring a broken test// this comes in script block
test.slow=marks a test as slow, running a slow test(eg heavy UI interactions)
test.fail= marking a known bug as expected to fail */

const { test, expect} = require('@playwright/test');
const { exp } = require('firebase/firestore/pipelines');

test.describe('Google Search Tests',()=>{

    test('Google homepage should load',async({page})=>{
        await page.goto('https://www.google.com/');
        await expect(page).toHaveTitle('Google');
    });

    test.skip('Google search should work',async({page})=>{
        await page.goto('https://www.google.com/');
        await page.fill("textarea[aria-label='Search']","Playwright");
        await page.keyboard.press('Enter');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test.fixme('Check if Google logo is visible',async({page})=>{
        await page.goto('https://www.google.com/');
        await expect(page.locator('img[alt="Google"]')).toBeVisible();
    });

    test('Google images should load',async({page})=>{
        test.slow();//always use inside test block
        await page.goto('https://www.google.com/imghp');
        await expect(page).toHaveTitle(/Google Images/);
    });

    test.fail('Google logo should be visible (but using an incorrect selector)',async({page})=>{
        await page.goto('https://www.google.com/');
        await expect(page.locator('img[alt="WrongGoogleLogo"]')).toBeVisible();
    });
    
    test("Search Playwright automation",async({page})=>{
      await page.goto('https://www.google.com/');
      await page.fill("textarea[aria-label='Search']","Playwright Automation");
      await page.keyboard.press('Enter');
      console.log("Test1 execution is completed");
    });
})
