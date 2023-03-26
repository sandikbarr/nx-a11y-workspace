import 'cypress-axe';

describe('demo-pages/angular-eslint/accessibility-interactive-supports-focus', () => {
  it('page is accessible', () => {
    cy.visit(
      '/angular-eslint/keyboard/accessibility-interactive-supports-focus'
    );

    cy.injectAxe();
    cy.checkA11y();
  });
});
