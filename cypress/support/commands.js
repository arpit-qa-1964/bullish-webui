// Custom command to edit the date component in the application
const loadingTime = Cypress.env('loadingTime');

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/

Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})

// Reusable method to validate the visibility of webelement
Cypress.Commands.add('elementVisible', (label) => {
    cy.get(label).should('be.visible');
})

// Reusable method to select and verify the selected element
Cypress.Commands.add('elementSelect', (label, elementSelect) => {
    cy.get(label).select(elementSelect, { force: true }).find(':selected').contains(elementSelect);;
})

// Reusable method to find the webelement
Cypress.Commands.add('elementFind', (label) => {
    cy.get(label);
})

// Reusable method to type the characters in a inputbox
Cypress.Commands.add('elementType', (label, inputChar) => {
    cy.get(label).type(inputChar, { force: true }).should('have.value', inputChar);
})

// Reusable method to clear and type the characters in a inputbox
Cypress.Commands.add('elementFindClearandType', (label, inputChar) => {
    cy.get(label).clear().type(inputChar, { force: true }).should('have.value', inputChar);
})

// Reusable method to validate the currently opened url
Cypress.Commands.add('validateURL', (URLValue) => {
    cy.url({timeout:loadingTime}).should('include', URLValue)
})

// Reusable method to click on a webelement
Cypress.Commands.add('elementClick', (label) => {
    cy.get(label).click();
})

// Reusable method to validate the Validation Message for a webelement
Cypress.Commands.add('validationMessageVerification', (label, validationMessage) => {
    cy.get(label).should('be.visible').and('include.text', validationMessage)
})