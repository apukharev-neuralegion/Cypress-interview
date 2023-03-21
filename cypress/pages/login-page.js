require('cypress-xpath')
import user from '../fixtures/example.json'


class loginPage{

    elements ={
        userNameInputField:() => cy.xpath("//*[@id=\'user-name\']"),
        passwordInputField:() => cy.xpath("//*[@id=\'password\']"),
        signInButton:() => cy.xpath("//*[@id=\"login-button\"]")
}
    login(){
        cy.fixture(user).then((userData) => {
            this.elements.userNameInputField().click();
            this.elements.userNameInputField().type(userData.user)
            this.elements.passwordInputField().click();
            this.elements.passwordInputField().type(userData.password)
        });
        this.elements.signInButton().click();
    }
}

module.exports = new loginPage();


