Feature: Basic test
  # FR

  @basic
  Scenario: Book an appointment 
    Given I am on home page
    And I accept cookies
    And I select menu link "Investment" and sub menu "Crypto savings accounts"
    And I select menu link "Investment" and sub menu "Asset management"
    And I select a private appointment for day "12" time "11:45"
    And I fill customer information for appointment
    | firstname  | lastname | mail           |   phone           |
    | Harry      | Potter   | harry@test.fr  |  0666666666       |
