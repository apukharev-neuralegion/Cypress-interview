require('cypress-xpath')


class loginPage{

    elements ={
        userNameInputField:() => cy.xpath("//*[@type=\"email\"]"),
        passwordInputField:() => cy.xpath("//*[@type=\"password\"]"),
        signInButton:() => cy.xpath("//*[@data-id=\"btn_sign_in\"]"),
        emailInputLabel:() => cy.get("mat-label.ng-tns-c8-0"),
        passwordInputLabel:() => cy.get('mat-label.ng-tns-c8-1 > span')
    };
    checkThatLoginFormElementsAreAvailable(){
        this.elements.emailInputLabel().should('contain', 'Email')
        this.elements.passwordInputLabel().should('contain', 'Password')

    };
    login(){
        cy.fixture('example').then((userData) => {
            const aoData = userData.autotest;
            this.elements.userNameInputField().click();
            this.elements.userNameInputField().type(aoData.user);
            this.elements.passwordInputField().click();
            this.elements.passwordInputField().type(aoData.password)
        });
        this.elements.signInButton().click();
    }
}

module.exports = new loginPage();


