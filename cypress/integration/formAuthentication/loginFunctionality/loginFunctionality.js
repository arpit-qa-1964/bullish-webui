import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import FormAuthenticationPage from "@Pages/formAuthenticationPage/FormAuthenticationPage";
import * as validationMessage from "@Validation/validationMessage";

// Step Definition Code
Given(`I click on Login button`, () => {
  FormAuthenticationPage.clickOnLoginButton()
});

Then(`Validation Message must be displayed`, () => {
  FormAuthenticationPage.validationMessage(validationMessage);
});

Then(`Validation Message for Incorrect Password must be displayed`, () => {
  FormAuthenticationPage.validationMessageIncorrectPassword(validationMessage);
});

Then(`Information Message for successful login must be displayed`, () => {
  FormAuthenticationPage.informationMessageSuccessfulLogin(validationMessage);
});

And(`Secure Login Url must be displayed`, () => {
  FormAuthenticationPage.validateSecureLoginURL();
});

When(`I enter Incorrect Username`, () => {
  FormAuthenticationPage.enterIncorrectUsername();
});

When(`I enter Correct Username`, () => {
  FormAuthenticationPage.enterCorrectUsername();
});

And(`I enter Correct Password`, () => {
  FormAuthenticationPage.enterCorrectPassword();
});

And(`I enter Incorrect Password`, () => {
  FormAuthenticationPage.enterIncorrectPassword();
});

Given(`Click on Logout Button`, () => {
  FormAuthenticationPage.clickOnLogoutButton()
});