//mouse actions:
/* click
double click or context click
right click
drag and drop
scrolling with Mouse
Hover over elements */

const { test, expect } = require('@playwright/test');

test('Locators Practice',async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await expect(page.locator("#click_type")).not.toBeVisible();//by default click at right side should not be visible
    /* await page.locator("div #click_area").click();
    await page.click("div #click_area");
    await expect(page.locator("#click_type")).toHaveText("Click");
 */
    //right click
   /*  await page.locator("div #click_area").click({button : 'right'});
    await page.click("div #click_area",{button : 'right'});
    await expect(page.locator("#click_type")).toHaveText("Right-Click"); */

    //double click => dblclick()
    /* await page.locator("div #click_area").dblclick();
    await page.dblclick("div #click_area");
    await expect(page.locator("#click_type")).toHaveText("Double-Click"); */

    //mouse hover
    /* await page.locator("button.dropbtn").hover();
    await page.locator("text='Java'").click();
    await expect(page.locator("#hover_validate")).toHaveText("Java"); */

    //drag and drop=> method is: dragAndDrop("drag id","drop id")
    /* await page.dragAndDrop("#drag_source","#drop_target");
    await expect(page.locator("div h3")).toHaveText("Drop is successful!"); */

    //other way:
    /* await page.locator("#drag_source").dragTo(page.locator("#drop_target"));
    await expect(page.locator("div h3")).toHaveText("Drop is successful!"); */

    //manually scroll down
    await page.mouse.wheel(0,500);

    await page.waitForTimeout(5000);
})
