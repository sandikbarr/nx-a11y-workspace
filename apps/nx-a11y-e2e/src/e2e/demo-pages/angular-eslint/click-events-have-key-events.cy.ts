import 'cypress-axe';

describe('demo-pages/angular-eslint/click-events-have-key-events', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/click-events-have-key-events');

    cy.injectAxe();
    cy.checkA11y();
  });
});
