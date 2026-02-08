import {test, expect} from "@playwright/test"
import {LoginAction} from "../../actions/loginErrorAction"
import {StandardUserLoginAction} from "../../actions/standardUserAction"
import {InventoryProductAction} from "../../actions/inventoryProductAction"

test.describe("Q1-Try login with locked_out_user and verify the error message.",()=>{
    test("verify the error message with locked_out_user",async({page})=>{
        
        const loginAction = new LoginAction(page);
        
        await loginAction.gotoLoginPage();
        await loginAction.login("locked_out_user","secret_sauce");

      const errorText = await loginAction.getErrorMessage();
        await expect(errorText).toBe("Epic sadface: Sorry, this user has been locked out.");
    })

     test("Log in with standard_user",async({page})=>{
        
        const standardUserLoginAction = new StandardUserLoginAction(page);
        
        await standardUserLoginAction.standardUserLoginPage();
        await standardUserLoginAction.standardlogin("standard_user","secret_sauce");
        await page.waitForTimeout(2000);
    })

    test("Add any three items to the cart",async({page})=>{
        
        const inventoryProductAction = new InventoryProductAction(page);

        await inventoryProductAction.openHamBurgerMenuIcon();
        await inventoryProductAction.resetAppState();
        await inventoryProductAction.addThreeItems();
        await inventoryProductAction.gotoTocartIcon();
        await inventoryProductAction.logout();
        
    })
})