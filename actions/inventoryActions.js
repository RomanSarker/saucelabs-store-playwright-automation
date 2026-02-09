import { InventoryPage } from '../pages/inventorypage.js';

export class InventoryActions {
  constructor(page) {
    this.page = page;
    this.sel = InventoryPage;
  }

  async addItems(count) {
    const items = this.page.locator(this.sel.items);
    const addedItemNames = [];

    for (let i = 0; i < count; i++) {
      const name = await items.nth(i).locator(this.sel.itemName).innerText();
      addedItemNames.push(name);
      await items.nth(i).locator('button').click();
    }
    return addedItemNames;
  }

  async sortZA() {
    await this.page.selectOption(this.sel.sortSelect, 'za');
  }

  async goToCart() {
    await this.page.click(this.sel.cartLink);
  }

  async getFirstItemName() {
    return this.page.locator(this.sel.itemName).first().innerText();
  }
}
