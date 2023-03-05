import 'cypress-axe';

describe('demo-pages/angular-eslint/accessibility-alt-text', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/accessibility-alt-text');

    cy.injectAxe();
    cy.checkA11y();
  });
});
