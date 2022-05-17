import * as FormAuthenticationPageSelector from "@FormAuthenticationSelector/FormAuthenticationPageSelector";
import * as loginData from "@Fixtures/formAuthentication/formAuthentication";

class FormAuthenticationPage {

  static clickOnLoginButton() {
    cy.elementClick(FormAuthenticationPageSelector.LOGIN_BUTTON);
  }

  static validationMessage(validationMessage) {
    cy.validationMessageVerification(FormAuthenticationPageSelector.VALIDATION_MESSAGE_FIELD, validationMessage.bullishValidationMessages.blank_credentials_validation_message)
  }

  static validationMessageIncorrectPassword(validationMessage) {
    cy.validationMessageVerification(FormAuthenticationPageSelector.VALIDATION_MESSAGE_FIELD, validationMessage.bullishValidationMessages.incorrect_password_validation_message)
  }
  
  static informationMessageSuccessfulLogin(validationMessage) {
    cy.validationMessageVerification(FormAuthenticationPageSelector.VALIDATION_MESSAGE_FIELD, validationMessage.bullishValidationMessages.successful_login_information_message)
  }

  static enterIncorrectUsername() {
    cy.elementType(FormAuthenticationPageSelector.USERNAME_INPUT, loginData.userCredentials.incorrectUsername)
  }

  static enterCorrectUsername() {
    cy.elementType(FormAuthenticationPageSelector.USERNAME_INPUT, loginData.userCredentials.correctUsername)
  }

  static enterCorrectPassword() {
    cy.elementType(FormAuthenticationPageSelector.PASSWORD_INPUT, loginData.userCredentials.correctPassword)
  }
  
  static enterIncorrectPassword() {
    cy.elementType(FormAuthenticationPageSelector.PASSWORD_INPUT, loginData.userCredentials.incorrectPassword)
  }

  static validateSecureLoginURL() {
    cy.validateURL(loginData.secureURLData)
  }

  static clickOnLogoutButton() {
    cy.elementClick(FormAuthenticationPageSelector.LOGOUT_BUTTON)
  } 
}

export default FormAuthenticationPage;