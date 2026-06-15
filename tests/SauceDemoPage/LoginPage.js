const {Page} = require('@playwright/test')
const {BasePage} = require('./BasePage');

export class Login extends BasePage{
    constructor(page){
        super(page);//coz already constructor in base page is initialized. by using keyword super we will call parent constructor by child
    }
    #userNameField = "#user-name";// # this symbol for truly private
    #passwordField="#password";
    #loginButton = "#login-button";

    async logintoSauceDemo(userName,password){
        await this._page.fill(this.#userNameField,userName);
        await this._page.fill(this.#passwordField,password);
        await this._page.click(this.#loginButton);
    }
}