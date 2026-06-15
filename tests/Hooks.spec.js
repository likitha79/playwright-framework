/* Types of hooks in playwright

beforeAll-runs once before all tests
afterAll-runs once after all tests
beforeEach-runs before each test
afterEach-runs after each test

syntax is

test.beforeAll(async{}=>{
    //code you want to execute before all the tests ---launch the browser
})

test.afterAll(async{}=>{
    //code you want to execute after all the tests ---close the browser
})

test.beforeEach(async{}=>{
    //code you want to execute before each test ---launch url
})

test.afterEach(async{}=>{
    //code you want to execute after each test ---completion
}) */

const { test, Page, chromium, Browser} = require('@playwright/test');

let browser;
let page ;

test.describe("Hooks",()=>{
    test.beforeAll(async()=>
    {
        console.log("Launch the browser");
        browser=await chromium.launch({headless:false});//launch the browser
        page =await browser.newPage();//opens the page

    })
    test.afterAll(async()=>{
        console.log("Closing the browser");
        await browser.close();
    })
    test.beforeEach(async()=>{
        console.log("Launching the url");
        await page.goto("https://www.google.com/");
    })
    test.afterEach(async()=>{
        console.log("Test Completed");
    })
    test("Test1 : Search Playwright automation",async()=>{
        await page.fill("textarea[aria-label='Search']","Playwright Automation");
        await page.keyboard.press('Enter');
        console.log("Test1 execution is completed");
    })
    test("Test2 : Search JavaScript tutorial",async()=>{
        await page.fill("textarea[aria-label='Search']","JavaScript tutorial");
        await page.keyboard.press('Enter');
        console.log("Test2 execution is completed");
    })

})