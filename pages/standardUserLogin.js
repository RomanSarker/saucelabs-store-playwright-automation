export class StandardUserLogin {
    constructor(page){
        this.page = page;
         this.userNameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }
}