const { test, expect } = require('@playwright/test');
const path = require('node:path');

test('Screenshots',async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000);
    /* await page.screenshot({path : 'Screenshots/amazon1.png'});//screenshot is named as amazon.png and that is storred in folder named Screenshots, not fully visible but only visible part of web page is screenshotted 
    await page.screenshot({path : 'amazon1.png'});  // this structure is used to save screenshot with particular name separately not in folder
    await page.screenshot({path: 'Screenshots/amazon.png',fullPage:true})//this is to take screenshot of full page including footer
 */
    //await page.screenshot({path : `Screenshots/amazon1 - ${Date.now()}.png`});// Date.now : unique screenshots with unique name
    
    ////in playwright.config.js at line 33 write screenshot:'only-on-failure' coz it provides image of error and stores at test-results... here we gave locator wrong so that it failed and provided SS

    const ele=await page.$("#twotabsearchtextbox");//for single page we r using: page.$
    await ele?.screenshot({path : 'Screenshots/amazon.png'});
    
    //31st video:record video
    await page.locator('#twotabsearchtextbox').fill("book");
    page.close();
})