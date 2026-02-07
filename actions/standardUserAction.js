import  {StandardUserLogin} from "../pages/standardUserLogin";

export class StandardUserLoginAction{
    constructor(page){
        this.page = page;

        this.standardUserLogin = new StandardUserLogin(page);
    }
    async standardUserLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    }
    async standardlogin(username,password){
       await this.standardUserLogin.userNameInput.fill(username);
       await this.standardUserLogin.passwordInput.fill(password);
       await this.standardUserLogin.loginButton.click()
    }

}