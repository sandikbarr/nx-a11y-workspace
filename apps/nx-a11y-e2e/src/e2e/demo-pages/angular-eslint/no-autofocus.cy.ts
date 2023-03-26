import 'cypress-axe';

describe('demo-pages/angular-eslint/no-autofocus', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/keyboard/no-autofocus');

    cy.injectAxe();
    cy.checkA11y();
  });
});
