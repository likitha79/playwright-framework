/* Page Object module(POM)

Design pattern - organise and manage web elements-(by creating separate class for each webpage)-in each class we store locators

Advantages
1.Better Code Organization-
2.Reuseability-
3.Improved Maintanance-
4.Readability- */

const {test,expect} = require('@playwright/test');
const {Login} = require('./SauceDemoPage/LoginPage');
const { Products } = require('./SauceDemoPage/Products');
const { CheckOutPage } = require('./SauceDemoPage/CheckOutPage');

test("User should be able to login",async({page})=>{
    const login = new Login(page);// by using new keyword we r creating an object, by this object we can access methods inside the class
    const product=new Products(page);
    const cart=new CheckOutPage(page);

    await login.navigate("https://www.saucedemo.com/");
    await login.waitForPageLoad();
    await login.logintoSauceDemo("standard_user","secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    const isProduct = await product.isProductsVisible();
    expect(isProduct).toBeTruthy()//checks true or not

    const isLogo = await product.isLogoPresent();
    expect(isLogo).toBeTruthy();

    await product.validateProductDetails();
    await product.addToCartByName("Sauce Labs Backpack");

    await product.clickOnCheckOutButton();
    const productName=await cart.getProductNameInCart();
    expect(productName).toBe("Sauce Labs Backpack");
})