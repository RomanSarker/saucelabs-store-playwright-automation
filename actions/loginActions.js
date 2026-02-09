import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.js';

export class LoginActions {
  constructor(page) {
    this.page = page;
    this.sel = LoginPage;
  }

  async login(username, password) {
    await this.page.fill(this.sel.username, username);
    await this.page.fill(this.sel.password, password);
    await this.page.click(this.sel.loginButton);
  }

  async verifyError(msg) {
    await expect(this.page.locator(this.sel.error)).toHaveText(msg);
  }
}
