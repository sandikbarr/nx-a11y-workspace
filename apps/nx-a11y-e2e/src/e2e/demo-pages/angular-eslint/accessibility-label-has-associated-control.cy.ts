import 'cypress-axe';

describe('demo-pages/angular-eslint/accessibility-label-has-associated-control', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/accessibility-label-has-associated-control');

    cy.injectAxe();
    cy.checkA11y();
  });
});
