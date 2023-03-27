import 'cypress-axe';

describe('demo-pages/angular-eslint/accessibility-alt-text', () => {
  before(() => {
    cy.visit('/angular-eslint/content/accessibility-alt-text');
    cy.injectAxe();
  });

  it('page is accessible', () => {
    cy.checkA11y();
  });
});
