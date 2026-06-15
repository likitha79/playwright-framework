const { test, expect } = require('@playwright/test');

test("Drop Down", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    // await page.locator("#searchDropdownBox").selectOption("search-alias=alexa-skills");

    // await page.locator("#searchDropdownBox").selectOption({ label: 'Amazon Devices' });

    // await page.locator("#searchDropdownBox").selectOption({ index: 2 });

    // await page.selectOption("#searchDropdownBox", { label: 'Amazon Devices' });

    // const selectedOption = await page.locator("#searchDropdownBox").inputValue();
    // expect(selectedOption).toBe("search-alias=amazon-devices");

    const selectedOption = await page.locator("#searchDropdownBox option:checked").textContent();

    expect(selectedOption.trim()).toBe("All Categories");

    const countOfElements = await page.locator("#searchDropdownBox option").count();

    console.log(countOfElements);

    expect(countOfElements).toBe(45);

    await page.waitForTimeout(5000);

});

test('Custom Drop down',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator('button[type="submit"]').click();
    await expect( page.locator(".oxd-topbar-header-title")).toBeVisible();
   
    await page.locator(".oxd-userdropdown-tab").click();
    await page.locator("[role='menuitem']",{hasText:'Support'}).click();
    await expect(page.locator(".orangehrm-sub-title")).toHaveText("Customer Support");
    await page.locator(".oxd-main-menu-item--name",{hasText:"Leave"}).click();
    await page.waitForSelector(".oxd-multiselect-wrapper .oxd-select-text");
    await page.locator(".oxd-multiselect-wrapper .oxd-select-text").click();
    await page.locator(".oxd-select-option",{hasText:'Cancelled'}).click();
    await page.waitForSelector(".oxd-multiselect-chips-selected");
    await expect(page.locator(".oxd-multiselect-chips-area .oxd-chip.oxd-chip--default.oxd-multiselect-chips-selected",{hasText:"Cancelled"})).toBeVisible();
    await page.waitForTimeout(5000);
})

test.only('Searchable Drop down',async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("#twotabsearchtextbox").fill("book");
    await page.waitForSelector(".left-pane-results-container",{timeout:15000});
    await expect(page.locator(".left-pane-results-container")).toBeVisible();
    const countofOptions=await page.locator("[id*='sac-suggestion-row']").count();
    console.log(countofOptions);
    await expect(page.locator("[id*='sac-suggestion-row']")).toHaveCount(20);

    const optionsText=await page.locator("[id*='sac-suggestion-row']").allTextContents();
    console.log(optionsText);

    await expect( page.locator("[id*='sac-suggestion-row']",{hasText:'bookmark'}).first()).toBeVisible();
    //page.locator("[id*='sac-suggestion-row']",{hasText:'bookmark'}).first().click();

    const options=await page.locator("[id*='sac-suggestion-row']").all();
    for(const option of options){
        const text=await option.textContent();
        if(text && text.includes("bookmark")){
            await option.click();
            break;
        }
    }

     

})