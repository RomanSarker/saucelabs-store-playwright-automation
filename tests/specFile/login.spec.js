import {test, expect} from "@playwright/test"
import {LoginAction} from "../../actions/loginErrorAction"
import {StandardUserLoginAction} from "../../actions/standardUserAction"
import {InventoryProductAction} from "../../actions/inventoryProductAction"
import {CartPageAction} from "../../actions/cartPageAction"
import {CheckOutInfoPageAction} from "../../actions/checkOutInfoPageAction"

test.describe("Automation for Saucedemo",()=>{
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
        // await inventoryProductAction.logout();
        
    })
     test("Click CheckOut Button",async({page})=>{
        
        const cartPageAction = new CartPageAction(page);
        await cartPageAction.checkOutButtonClick();
    })

     test("Fill Up CheckOut Info Details",async({page})=>{
        
        const checkOutInfoPageAction = new CheckOutInfoPageAction(page);
        
        await checkOutInfoPageAction.fillUserInfo("Roman","Sarker","1230")
        await checkOutInfoPageAction.checkOutContinueButtonClick();

        const products = await checkOutInfoPageAction.getProductNames();
         expect(products.length).toBe(3);
        const prices = await checkOutInfoPageAction.getProductPrices();
            expect(prices.length).toBe(3);

            await checkOutInfoPageAction.finishOrder();

            await expect(checkOutInfoPageAction.checkOutInfoPage.successMessage).toHaveText("Thank you for your order!");

            await inventoryProductAction.openHamBurgerMenuIcon();
            await inventoryProductAction.resetAppState();
            await inventoryProductAction.logout();
    })
    
})