import 'cypress-axe';

describe('demo-pages/angular-eslint/mouse-events-have-key-events', () => {
  it('page is accessible', () => {
    cy.visit('/angular-eslint/keyboard/mouse-events-have-key-events');

    cy.injectAxe();
    cy.checkA11y();
  });
});
