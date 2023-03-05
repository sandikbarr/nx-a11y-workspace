import 'cypress-axe';

describe('demo-pages/angular-eslint/accessibility-valid-aria', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/accessibility-valid-aria');

    cy.injectAxe();
    cy.checkA11y();
  });
});
