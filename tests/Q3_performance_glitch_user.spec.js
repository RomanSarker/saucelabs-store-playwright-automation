import { test } from '@playwright/test';
import { LoginActions } from '../actions/loginActions.js';
import { InventoryActions } from '../actions/inventoryActions.js';
import { MenuActions } from '../actions/menuActions.js';
import { CheckoutActions } from '../actions/checkoutActions.js';
import { users } from '../Utils/testdata.js';

test.describe('Q3 | Performance Resilience - Performance Glitch User', () => {
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

    test('Performance user should successfully sort and complete a purchase journey', async () => {
        
        await login.login(users.performance.username, users.performance.password);
        await menu.resetAppState();

    
        await inventory.sortZA();
        const addedItems = await inventory.addItems(1);
        await inventory.goToCart();

      
        await checkout.checkout();

        
        await checkout.verifyProductNames(addedItems);
        await checkout.verifyTotal();

        
        await checkout.finishAndVerifySuccess();

            
            await menu.resetAppState();
            await menu.logout();
        });
    });
