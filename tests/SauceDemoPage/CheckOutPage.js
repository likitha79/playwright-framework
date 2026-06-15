const {test, Page} = require('@playwright/test');
const {BasePage} = require('./BasePage');

export class CheckOutPage extends BasePage{
    constructor(page){
        super(page);
    }
    #itemName=".inventory_item_name";
    async getProductNameInCart(){
        return (await this._page.locator(this.#itemName).textContent())?.trim() || '';
    }
}

