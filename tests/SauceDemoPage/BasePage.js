const {Page} = require('@playwright/test')

export class BasePage{
    _page;
    constructor(page){
        this._page=page;
    }//only the BasePage can use this page when protected word is used or else when this class is inherited.in js for private we use#page
    async navigate(url){
        await this._page.goto(url);
    }
    async waitForPageLoad(){
        await this._page.waitForLoadState('load');
    }

} 