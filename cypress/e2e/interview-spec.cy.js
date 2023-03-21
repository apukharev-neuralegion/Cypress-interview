import loginPage from '../pages/login-page'

beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
})

it('Should login to main page', () =>{

  loginPage.login();
})