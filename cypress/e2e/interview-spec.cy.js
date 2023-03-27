import loginPage from '../pages/login-page'
import scanPage from '../pages/scan-table-page'


beforeEach(() => {
  cy.fixture('example').then((userData) => {
    const urlData = userData.urlData;
    cy.visit(urlData.devUrl);
  });
});

it('Should login to main page', () =>{
  loginPage.checkThatLoginFormElementsAreAvailable();
  loginPage.login();
  scanPage.checkThatScanTitlesContain();
});