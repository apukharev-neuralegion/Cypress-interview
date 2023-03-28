require('cypress-xpath')


class scanTablePage{

    elements ={
        scanInputLable:() => cy.get('.cdk-column-name > .title'),
    };
    checkThatScanTitlesContain(){
        this.elements.scanInputLable().should('contain', 'DVWA - HAR All no-smart +AO');
        this.elements.scanInputLable().should("have.length", 10);
    };
    checkUrlPattern(urlPart){
        cy.url().should('include', urlPart);
    };
}

module.exports = new scanTablePage();


