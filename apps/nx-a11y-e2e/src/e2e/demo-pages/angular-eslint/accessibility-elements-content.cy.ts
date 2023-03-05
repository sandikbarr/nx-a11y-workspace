import 'cypress-axe';

describe('demo-pages/angular-eslint/accessibility-elements-content', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/accessibility-elements-content');

    cy.injectAxe();
    cy.checkA11y();
  });
});
