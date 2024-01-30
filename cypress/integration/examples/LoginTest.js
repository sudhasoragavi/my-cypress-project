import LoginPage from '../pageObjects/LoginPage';

describe('Login Functionality', () => {
     const loginPage = new LoginPage();

    it('should login with valid credentials', () => {
        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
      });

      
  });