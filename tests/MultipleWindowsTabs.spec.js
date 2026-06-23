/* multiple windows or tabs

syntax:
const[newTab]=await Promise.all({
    page.waitForEvent("Popup");
    page.click("locator")
})

const[newWindow]=await promise.all([
    context.waitForEvent("Page");
    page.click("locator")
]) */

const { test,expect,chromium,Page} = require("@playwright/test")

test("Multiple Tabs",async({page: Page})=>{
    const browser = await chromium.launch({headless :false })
    const context=await browser.newContext();
    const page=await context.newPage();
    //launched the browser,then opened incognito mode and then new page
    await page.goto("https://demoqa.com/");
    await page.locator("text=Alerts, Frame & Windows").click();
    await page.locator("text = Browser windows").click();

    const [newTab] = await Promise.all([
        page.waitForEvent("popup"),
        await page.locator("#tabButton").click() 
    ])

    await newTab.waitForLoadState();
    console.log(" New tab url : ",newTab.url());
    await page.waitForTimeout(5000);
    await newTab.close();

})

test("Multiple Windows",async({page: Page})=>{
    const browser = await chromium.launch({headless :false })
    const context=await browser.newContext();
    const page=await context.newPage();
    //launched the browser,then opened incognito mode and then new page
    await page.goto("https://demoqa.com/");
    await page.locator("text=Alerts, Frame & Windows").click();
    await page.locator("text = Browser windows").click();

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        await page.locator("#windowButton").click() 
    ])

    await newWindow.waitForLoadState();
    //after this upper line we can add any assertions if needed 
    console.log(" New window url : ",newWindow.url());
    await page.waitForTimeout(5000);
    await newWindow.close();

})