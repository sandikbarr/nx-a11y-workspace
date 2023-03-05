import { getGreeting } from '../support/app.po';
import 'cypress-axe';

describe('nx-a11y', () => {
  it('page is accessible', () => {
    cy.visit('/');

    cy.injectAxe();
    cy.checkA11y();
  });
});
