import 'cypress-axe';

describe('demo-pages/angular-eslint/accessibility-role-has-required-aria', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/accessibility-role-has-required-aria');

    cy.injectAxe();
    cy.checkA11y();
  });
});
