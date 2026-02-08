import {CartPage} from "../pages/cartPage"

export class CartPageAction{
    constructor(page){
      this.page = page;
      this.cartPage = new CartPage(page);
    }
    async checkOutButtonClick(){
        await this.page.cartPage.checkOutButton.click();
    }

}