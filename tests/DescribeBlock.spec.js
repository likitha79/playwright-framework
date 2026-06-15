// describe :  i)Features or Modules  ii)Test Types- Functional,regression or smoke  iii)Based on roles-admin,customer
// npx playwright test -g "Login Functionality" --project=chromium --headed   =>this command used to run specific test block and also without this command we can add:  .only to test  
const { test, expect} = require('@playwright/test');
//after const we should write function or else after all tests at the end we should write.This function can be called where ever required in tests

async function login(page) {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    
}

test.describe('Login Functionality',() =>
{
    test("Valid credentials", async({ page })=>
    {
       /*  await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click(); */
        await login(page);
        await page.waitForSelector(".title");
        await expect(page.locator(".title")).toHaveText("Products");

    })
    test("InValid credentials", async({ page })=>
    {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user1");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        await page.waitForSelector("h3[data-test='error']");
        await expect(page.locator("h3[data-test='error']")).toContainText("do not match");// toContainText is partial text,toHaveText is fully text
    })
   
})

test.describe('Products page',()=>{
    test("add product",async({page})=>{
       /*  await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click(); */ 
        await login(page);
        await page.waitForSelector(".title");
        await expect(page.locator(".title")).toHaveText("Products");
        await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    })
})

test.describe("Cart Page Functionality",()=>{
    test("Validate cart page",async({page})=>{
        
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        await page.waitForSelector(".title");
        await expect(page.locator(".title")).toHaveText("Products");
        await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
        await page.locator(".shopping_cart_link").click();
        await page.waitForSelector(".title");
        await expect(page.locator(".title")).toHaveText("Your Cart");
        
    })

    test("Validate checkout text",async({page})=>{
        
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        await page.waitForSelector(".title");
        await expect(page.locator(".title")).toHaveText("Products");
        await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
        await page.locator(".shopping_cart_link").click();
        await page.waitForSelector("#checkout");
        await expect(page.locator("#checkout")).toHaveText("Checkout");
        
    })
       
})