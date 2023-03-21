require('cypress-xpath')


class mainPage{

    elements ={
        inventoryItems:() => cy.xpath("//*[@class=\"inventory_item\"]"),
        inventoryItemNames:() => cy.xpath("//*[@class=\"inventory_item_name\"]"),

    }
    checkPrices(){

        this.elements.signInButton().click();
    }
}

module.exports = new mainPage();