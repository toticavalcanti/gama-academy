Feature: Clients
  Scenario: List of clients
    Given I'm have "10" clients in my database
    When I access the homepage
    Then See the list of "10" itens
