export class InventoryProductPage {
    constructor(page){
        this.page = page;

        this.hamBurgerIcon = page.locator("#react-burger-menu-btn");
        this.resetLink = page.locator("#reset_sidebar_link");
        this.addToCartButton = page.locator("#add-to-cart-sauce-labs-backpack");
        this.clickCartIcon = page.locator(".shopping_cart_badge");
        this.logoutLink = page.locator("#logout_sidebar_link");
    }
}