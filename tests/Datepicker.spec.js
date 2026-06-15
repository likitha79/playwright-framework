const { test, expect } = require('@playwright/test');

test('Handling Date picker',async({page})=>{
    /* await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#dob").fill("2026-05-28");
    await expect( page.locator("#dob")).toHaveValue("2026-05-28"); */

    await page.goto("https://www.globalsqa.com/demo-site/datepicker/",{timeout:50000, waitUntil:'domcontentloaded'});
    const frame=page.frameLocator(".demo-frame").first();
    await frame.locator('#datepicker').click();
    /* await frame.locator("text='28'").click();
    await expect(frame.locator("#datepicker")).toHaveValue("05/28/2026"); */

    /* const date=new Date();
    console.log(date);
    const currentdate=date.getDate();
    console.log(currentdate);

    const currentmonth=date.getMonth() + 1;
    console.log(currentmonth);

    const currentfullyear=date.getFullYear();
    console.log(currentfullyear);

    const formatteddate=`${currentmonth}/${currentdate}/${currentfullyear}`;
    console.log(formatteddate);

    const datepickervalue=await frame.locator("#datepicker").inputValue();
    console.log(datepickervalue);

    await frame.locator(`text="${currentdate}"`).click();

    */
   const targetyear=2026;
   const targetmonth="July";
   const targetdate="20";

   while(true){
    const displayedyearText=await frame.locator(".ui-datepicker-year").textContent() || "0";
    console.log(displayedyearText);
    const displayedYear=parseInt(displayedyearText);
    console.log(displayedYear);
    
    if(displayedYear===targetyear){
        break;
    }
    if(displayedYear<targetyear)//2025<2026
    {
        await frame.locator(".ui-datepicker-next").click();
    }
    else{
        await frame.locator(".ui-icon ui-icon-circle-triangle-w").click();
    }

   }

   while(true){
    const displayedMonth=await frame.locator(".ui-datepicker-month").textContent();
    if(displayedMonth===targetmonth){
        break;
    }
    else
    {
        await frame.locator(".ui-datepicker-next").click();
    }
   }
    
   await frame.locator(`text="${targetdate}"`).click();

   await page.waitForTimeout(5000);
})