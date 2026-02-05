export class LoginPageErrMessage {
    constructor(page){
        this.page = page;

        this.userNameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.locator('[data-test="error"]')
    }
}