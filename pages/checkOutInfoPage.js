export class CheckOutInfoPage{
   constructor(page){
    this.page = page;
    this.checkOutFirstName = page.locator("#first-name");
    this.checkOutLastName = page.locator("#last-name");
    this.checkOutPostalCode = page.locator("#postal-code");
    this.checkOutContinueButtonClick = page.locator("#continue");

    this.productNames = page.locator(".inventory_item_name");
    this.productPrices = page.locator(".inventory_item_price");
    this.finishButton = page.locator("#finish");

    this.successMessage = page.locator(".complete-header");
   }
}