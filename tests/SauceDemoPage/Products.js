const {Page} = require('@playwright/test');
const {BasePage} = require('./BasePage');

export class Products extends BasePage{
   constructor(page){
    super(page);
   }
   #productText=".title";
   #logo=".app_logo";
   #productlist=".inventory_item";
   #productTitle=".inventory_item_name";
   #productDescription=".inventory_item_desc";
   #productPrice=".inventory_item_price";
   #addToCart=".btn_primary.btn_small.btn_inventory";
   #checkOutButton=".shopping_cart_link";

   async clickOnCheckOutButton(){
     await this._page.locator(this.#checkOutButton).click();

   }

   async addToCartByName(targetProductName) {
      const productNameCount = await this._page.locator(this.#productlist).count();
      console.log(productNameCount);
      for(let i=0;i<productNameCount;i++){
        const product=this._page.locator(this.#productlist).nth(i);
        const name=await product.locator(this.#productTitle).textContent();
        console.log(name);
        if(name.trim()===targetProductName){
            await product.locator(this.#addToCart).click();
            console.log(`product ${targetProductName} is added to the cart`);
            return;
        }
      }
      throw new Error(`product : ${targetProductName} is not found on the page`);
   }

   async isProductsVisible() {
       return await this._page.locator(this.#productText).isVisible();
   }
   async isLogoPresent(){
     return await this._page.locator(this.#logo).isVisible();
   }

   async validateProductDetails(){
      const product = await this._page.locator(this.#productlist).count();
      console.log(`Total products found : ${product}`);

      for(let i=0;i<product;i++){
        const title = await this._page.locator(this.#productlist).nth(i).locator(this.#productTitle).innerText();
        console.log(`product ${i+1} title : ${title}`);

        if(!title){
            throw new Error(`Product ${i+1} is missing a title`)
        }

        const description = await this._page.locator(this.#productlist).nth(i).locator(this.#productDescription).innerText();
        console.log(`product ${i+1} description : ${description}`);

        if(!description){
            throw new Error(`Product ${i+1} is missing a description`)
        }

        const price  = await this._page.locator(this.#productlist).nth(i).locator(this.#productPrice).innerText();
        console.log(`product ${i+1} price : ${price}`);

        if(!price){
            throw new Error(`Product ${i+1} is missing the price`)
        }

        const addToCart = await this._page.locator(this.#productlist).nth(i).locator(this.#addToCart).innerText();
        console.log(`product ${i+1} addtocart : ${addToCart}`);

        if(!addToCart){
            throw new Error(`Product ${i+1} is missing a addToCart`)
        }
      }

   }
}