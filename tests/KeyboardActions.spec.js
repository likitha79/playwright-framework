//keyboard actions
/* press enter
type text
Ctrl A,C,V X
Shift key */

//page.keyboard.down('Shift') => is to press shift key
//page.keyboard.up('Shift')=> is to release the key


const { test, expect } = require('@playwright/test');


test('Keyboard Actions',async({page})=>{
    /* await page.goto("https://www.flipkart.com/");
    await page.getByPlaceholder("Search for Products, Brands and More").first().focus();
    await page.keyboard.type("Laptop");//type the text
    //await page.keyboard.press("Enter");// press enter
    await page.keyboard.press("Control+A");//selects the all text
    await page.waitForTimeout(3000);
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(5000); */

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.getByPlaceholder("First name").focus();
    await page.keyboard.type("Script And Execute");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Control+A");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Control+C");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("name@example.com").focus();
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(5000);
    await page.keyboard.down('Shift');
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Shift');
    await page.waitForTimeout(5000);

    
})