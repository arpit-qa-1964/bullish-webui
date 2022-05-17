// Custom command to edit the date component in the application
const loadingTime = Cypress.env('loadingTime');

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/

Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})

Cypress.Commands.add('elementVisible', (label) => {
    cy.get(label).should('be.visible');
})

Cypress.Commands.add('elementSelect', (label, elementSelect) => {
    cy.get(label).select(elementSelect, { force: true }).find(':selected').contains(elementSelect);;
})

Cypress.Commands.add('elementFind', (label) => {
    cy.get(label);
})

Cypress.Commands.add('elementType', (label, inputChar) => {
    cy.get(label).type(inputChar, { force: true }).should('have.value', inputChar);
})

Cypress.Commands.add('elementFindClearandType', (label, inputChar) => {
    cy.get(label).clear().type(inputChar, { force: true }).should('have.value', inputChar);
})

Cypress.Commands.add('validateURL', (URLValue) => {
    cy.url({timeout:loadingTime}).should('include', URLValue)
})

Cypress.Commands.add('elementClick', (label) => {
    cy.get(label).click();
})

Cypress.Commands.add('validationMessageVerification', (label, validationMessage) => {
    cy.get(label).should('be.visible').and('include.text', validationMessage)
})