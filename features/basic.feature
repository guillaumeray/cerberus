Feature: Basic test swan
  # FR

  @basic
  Scenario: Fill form start now 
    Given I am on home page
    And I select menu link start now
    And I fill customer information
    | firstname         | lastname    | mail               | company  | website |  
    | Arthur            | fox          | fx@truc.fr        | google    | website.com| 
    | guillaume          | rayes      | fx@truc.fr         | fb        |website.com | 
    | tiff               | ray         | fx@truc.fr         | glm      | website.com| 
