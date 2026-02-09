import { test } from '@playwright/test';
import { LoginActions } from '../actions/loginActions.js';
import { users } from '../Utils/testdata.js';

test.describe('Q1 | Authentication Security - Locked Out User', () => {
    let login;

    test.beforeEach(async ({ page }) => {
        login = new LoginActions(page);
        await page.goto('/');
    });

    test('Should display an error message when a locked out user attempts to login', async () => {
        await login.login(users.locked.username, users.locked.password);

        await login.verifyError(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });
});
