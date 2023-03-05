import 'cypress-axe';

describe('demo-pages/angular-eslint/no-positive-tabindex', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/no-positive-tabindex');

    cy.injectAxe();
    cy.checkA11y();
  });
});
