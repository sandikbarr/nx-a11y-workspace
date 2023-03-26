import 'cypress-axe';

describe('demo-pages/angular-eslint/accessibility-table-scope', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/content/accessibility-table-scope');

    cy.injectAxe();
    cy.checkA11y();
  });
});
