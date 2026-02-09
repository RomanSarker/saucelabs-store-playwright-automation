import { MenuPage } from '../pages/menupage.js';

export class MenuActions {
  constructor(page) {
    this.page = page;
    this.sel = MenuPage;
  }

  async openMenu() {
    const sidebar = this.page.locator(this.sel.sidebar);
    const isHidden = await sidebar.getAttribute('aria-hidden');

    if (isHidden === 'true') {
      await this.page.click(this.sel.burgerButton);
    }
    await sidebar.waitFor({ state: 'visible' });
  }

  async resetAppState() {
    await this.openMenu();
    const resetLink = this.page.locator(this.sel.resetLink);
    await resetLink.click();

    await this.page.click(this.sel.closeButton);
    await this.page.locator(this.sel.sidebar).waitFor({ state: 'hidden' });
  }

  async logout() {
    await this.openMenu();
    const logoutLink = this.page.locator(this.sel.logoutLink);
    await logoutLink.waitFor({ state: 'visible' });
    await logoutLink.click();
  }
}
