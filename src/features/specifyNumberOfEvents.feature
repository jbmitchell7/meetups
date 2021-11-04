Feature: Specify number of events

    Scenario: When the user hasn't specified a number of events to view, 32 should be shown
        Given the user is viewing events
        When the user has not selected a number of events to view
        Then 32 events should be displayed

    Scenario: User can change the number of events they want to see
        Given the user is viewing events
        When the user changes the number of events to view
        Then the number of events in view should change to the selected value