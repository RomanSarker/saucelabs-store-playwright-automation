import {LoginPageErrMessage} from "../pages/loginPageErrMessage"

export class LoginAction{
    constructor(page){
        this.page = page;

        this.loginPageErrMessage = new LoginPageErrMessage(page);
    }

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    }
    async login(username,password){
       await this.loginPageErrMessage.userNameInput.fill(username);
       await this.loginPageErrMessage.passwordInput.fill(password);
       await this.loginPageErrMessage.loginButton.click()
    }
    async getErrorMessage(){
        return this.loginPageErrMessage.errorMessage.textContent();
    }
}