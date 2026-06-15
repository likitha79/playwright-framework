const { test, expect } = require('@playwright/test');

test('Handling Web Table',async({page})=>{
    await page.goto("https://letcode.in/table",{timeout:30000, waitUntil:'domcontentloaded'});
    await expect(page.locator("#shopping")).toBeVisible();

    const row=await page.locator("#shopping tbody tr").count();
    console.log(`The number of rows in the table : ${row}`);
    await expect(row).toBe(4) ;

    const col =await page.locator("#shopping thead tr th").count();
    console.log(`The number of cols in the table : ${col}`);
    await expect(col).toBe(2) ;

    const itemname=await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(1)").textContent();
    console.log(`item name is : ${itemname}`);
    expect(itemname).toBe("Apple");

    const itemPrice=await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(2)").textContent();
    console.log(`item price is : ${itemPrice}`);
    expect(itemPrice).toBe("180");

    //validate the columns
    const colname=['Items','Price'];
    const coltextname=await page.locator("#shopping thead tr th").allTextContents();
    console.log(`Column names are: ${coltextname}`);
    expect(coltextname).toEqual(colname);

})