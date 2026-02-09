import { expect } from '@playwright/test';
import { CheckoutPage } from '../pages/cart&checkoutPage.js';
import { checkoutInfo } from '../Utils/testdata.js';

export class CheckoutActions {
  constructor(page) {
    this.page = page;
    this.sel = CheckoutPage;
  }

  async enterCheckoutInfo() {
    await this.page.fill(this.sel.firstName, checkoutInfo.firstName);
    await this.page.fill(this.sel.lastName, checkoutInfo.lastName);
    await this.page.fill(this.sel.postalCode, checkoutInfo.zip);
    await this.page.click(this.sel.continueButton);
  }

  async checkout() {
    await this.page.click(this.sel.checkoutButton);
    await this.enterCheckoutInfo();
  }

  async verifyProductNames(expectedNames) {
    const itemNames = this.page.locator(this.sel.itemName);
    for (const name of expectedNames) {
      await expect(itemNames.filter({ hasText: name })).toBeVisible();
    }
  }

  async verifyTotal() {
    const totalLabel = this.page.locator(this.sel.totalLabel);
    await expect(totalLabel).toBeVisible();
    const totalText = await totalLabel.innerText();
    expect(totalText).toContain('Total: $');
  }

  async finishAndVerifySuccess() {
    await this.page.click(this.sel.finishButton);
    await expect(this.page.locator(this.sel.completeHeader))
      .toHaveText('Thank you for your order!');
    await expect(this.page.locator(this.sel.completeText))
      .toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }
}
