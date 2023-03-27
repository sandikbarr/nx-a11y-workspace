import 'cypress-axe';

describe('demo-pages/angular-eslint/button-has-type', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/content/button-has-type');

    cy.injectAxe();
    cy.checkA11y();
  });
});
