import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I am on Herokuapp website`, () => {
  cy.visit('/');
  cy.validateURL('herokuapp')
});

Given(`I click on Form Authentication link`, () => {
  cy.get('a[href="/login"]').click();
});

Then(`Login Page must be displayed`, () => {
  cy.validateURL('login')
});