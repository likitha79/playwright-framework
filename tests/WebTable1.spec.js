const { test, expect } = require('@playwright/test');

test('Handling Web Table',async({page})=>{
    await page.goto("https://letcode.in/table",{timeout:30000, waitUntil:'domcontentloaded'});
    await expect(page.locator("#simpletable")).toBeVisible();
    /* const name='Koushik';
    const row =await page.locator("#simpletable tbody tr").filter({hasText:name});
    row.locator("input[type='checkbox']").check();

    await expect(row.locator("input[type='checkbox']")).toBeChecked();
 */

   /* const names=['Koushik','Yashwanth','Iron'];

    for(const name of names){
        const row =await page.locator("#simpletable tbody tr").filter({hasText:name});
        await row.locator("input[type='checkbox']").check();
    }

    for(const name of names){
        const row =await page.locator("#simpletable tbody tr").filter({hasText:name});
        await expect( row.locator("input[type='checkbox']")).toBeChecked();
    } */

    await expect(page.locator(".mat-sort")).toBeVisible();
    const calories= await page.locator(".mat-sort tr td:nth-of-type(2)").allTextContents();
    console.log(calories);

    const isSorted = calories.join()===[...calories].sort().join();
    console.log(isSorted);
    await expect(isSorted).toBe(true);
    

})