import {test, expect} from "@playwright/test"
import {LoginAction} from "../../actions/loginErrorAction"

test.describe("Q1-Try login with locked_out_user and verify the error message.",()=>{
    test("verify the error message with locked_out_user",async({page})=>{
        
        const loginAction = new LoginAction(page);
        
        await loginAction.gotoLoginPage();
        await loginAction.login("locked_out_user","secret_sauce");

      const errorText = await loginAction.getErrorMessage();
        await expect(errorText).toBe("Epic sadface: Sorry, this user has been locked out.");
    })
})