Feature: Performing a login

    Background:
        
    Scenario:login with a registered user
        Given I'm on the login page
        When I login in with a registered user
        Then I shall be on the facebook  home page.
    Scenario:Able to create a Group
        Given I am on the home page
        When Able to create a gruoup 
        Then I shall be able to leave  and delete the created group and perform logout
    
    




