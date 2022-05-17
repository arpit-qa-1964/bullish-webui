#Login Functionality Scenarios
Feature: Herokuapp Form Authentication

  Background:
    Given I am on Herokuapp website
    Given I click on Form Authentication link
    Then Login Page must be displayed

  Scenario: Verify the Login Functionality with Blank Username and Password
    When I click on Login button
    Then Validation Message must be displayed

  Scenario: Verify the Login Functionality with Incorrect Username and Correct Password
    When I enter Incorrect Username
    And I enter Correct Password
    When I click on Login button
    Then Validation Message must be displayed

    Scenario: Verify the Login Functionality with Correct Username and Incorrect Password
    When I enter Correct Username
    And I enter Incorrect Password
    When I click on Login button
    Then Validation Message for Incorrect Password must be displayed

    Scenario: Verify the Login Functionality with Correct Username and Correct Password
    When I enter Correct Username
    And I enter Correct Password
    When I click on Login button
    Then Information Message for successful login must be displayed
    And Secure Login Url must be displayed

    Scenario: Verify the Logout Functionality
    When I enter Correct Username
    And I enter Correct Password
    When I click on Login button
    Then Information Message for successful login must be displayed
    And Secure Login Url must be displayed
    When Click on Logout Button
    Then Login Page must be displayed