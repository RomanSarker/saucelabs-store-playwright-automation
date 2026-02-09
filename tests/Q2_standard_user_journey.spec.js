import { test } from '@playwright/test';
import { LoginActions } from '../actions/loginActions.js';
import { InventoryActions } from '../actions/inventoryActions.js';
import { MenuActions } from '../actions/menuActions.js';
import { CheckoutActions } from '../actions/checkoutActions.js';
import { users } from '../Utils/testdata.js';

test.describe('Q2 | End-to-End Journey - Standard User', () => {
    let login;
    let inventory;
    let menu;
    let checkout;

    test.beforeEach(async ({ page }) => {
        login = new LoginActions(page);
        inventory = new InventoryActions(page);
        menu = new MenuActions(page);
        checkout = new CheckoutActions(page);
        await page.goto('/');
    });

    test('Standard user should be able to complete a purchase from start to finish', async () => {
        await login.login(users.standard.username, users.standard.password);
        await menu.resetAppState();

        const addedItems = await inventory.addItems(3);
        await inventory.goToCart();

        await checkout.checkout();

        await checkout.verifyProductNames(addedItems);

        await checkout.verifyTotal();
        await checkout.finishAndVerifySuccess();

        await menu.resetAppState();
        await menu.logout();
    });
});
