Feature: Basic test
  # FR

  @basic
  Scenario: Add product to cart 
    Given I am on home page
    And I select menu link "T-shirts"
    And I add product "1" to cart