import 'cypress-axe';

describe('demo-pages/angular-eslint/no-distracting-elements', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/content/no-distracting-elements');

    cy.injectAxe();
    cy.checkA11y();
  });
});
