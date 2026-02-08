import {CheckOutInfoPage} from "../pages/checkOutInfoPage"

export class CheckOutInfoPageAction{
    constructor(page){
        this.page = page;
        const checkOutInfoPage = new CheckOutInfoPage(page);
    }
    async fillUserInfo(fName,lName,postalCode){
            await this.checkOutInfoPage.checkOutFirstName.fill(fName);
            await this.checkOutInfoPage.checkOutLastName.fill(lName);
            await this.checkOutInfoPage.checkOutPostalCode.fill(postalCode);
            await this.checkOutInfoPage.checkOutContinueButtonClick.click();
    }
//
     async getProductNames(){
        return await this.checkOutInfoPage.productNames.allTextContents();     
   }
    async getProductPrices(){
         return await this.checkOutInfoPage.productPrices.textContent();   
   }
   async finishOrder(){
         return await this.checkOutInfoPage.finishButton.click();   
   }
}