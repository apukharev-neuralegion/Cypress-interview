require('cypress-xpath')


class loginPage{

    elements ={
        userNameInputField:() => cy.xpath("//*[@type=\"email\"]"),
        passwordInputField:() => cy.xpath("//*[@type=\"password\"]"),
        signInButton:() => cy.xpath("//*[@data-id=\"btn_sign_in\"]"),
        emailInputLabel:() => cy.get("mat-label.ng-tns-c8-0"),
        passwordInputLabel:() => cy.get('mat-label.ng-tns-c8-1 > span'),
        emailInputMask:() => cy.get('#mat-mdc-error-0')
    };
    checkThatPageElementsAreExists(){
        this.elements.userNameInputField().should('exist');
        this.elements.passwordInputField().should('exist');
        this.elements.emailInputLabel().should('exist');
        this.elements.passwordInputLabel().should('exist');
        this.elements.signInButton().should('be.disabled').should('contain.text', 'Sign in');
    };
    checkThatLoginFormElementsContainCorrectText(){
        this.elements.emailInputLabel().should('contain', 'Email');
        this.elements.passwordInputLabel().should('contain', 'Password');
    };
    login(userName, password, url, statusCode){
        this.elements.userNameInputField().click();
        this.elements.userNameInputField().type(userName);
        this.elements.passwordInputField().click();
        this.elements.passwordInputField().type(password);
        this.elements.signInButton().should('be.enabled');
        cy.intercept('POST', url).as('getData');
        this.elements.signInButton().click();
        cy.wait('@getData').then((interception) => {
            expect(interception.response.statusCode).to.equal(statusCode);
        });
    };
    checkEmailIncorrectFormat(userName){
        this.elements.userNameInputField().click();
        this.elements.userNameInputField().type(userName);
        this.elements.passwordInputField().click();
        this.elements.emailInputMask().should('have.text', 'Incorrect email format');
    };
}

module.exports = new loginPage();


