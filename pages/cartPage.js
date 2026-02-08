export class CartPage{
    constructor(page){
        this.page = page;
        this.checkOutButton = page.locator("#checkout")
    }

}