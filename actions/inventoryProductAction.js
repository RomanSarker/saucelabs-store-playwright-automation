import {InventoryProductPage} from "../pages/inventoryProductPage";

export class InventoryProductAction{
    constructor(page){
        this.page = page ;
        this.inventoryProductPage = new InventoryProductPage(page);
    }

    async openHamBurgerMenuIcon(){
        await this.inventoryProductPage.hamBurgerIcon.click();
    }
    async resetAppState(){
        await this.inventoryProductPage.resetLink.click();
    }
    async addThreeItems(){
        for (let i=0; i<3; i++){
        await this.page.inventoryProductPage.addToCartButton.nth(i).click();
        }  
    }

    async gotoTocartIcon(){
        await this.page.inventoryProductPage.clickCartIcon.click();
    }

    // async logout(){
    //     await this.page.inventoryProductPage.logoutLink.click();
    // }

}