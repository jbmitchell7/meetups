Feature: Show and hide event details

    Scenario: An event element is collapsed by default
        Given the user is viewing all events
        When the user has not opened any event
        Then all events should be collapsed

    Scenario: User can expand an event to see its details
        Given all events are collapsed
        When the user clicks to see a single events details
        Then the event's details should become visible

    Scenario: User can collapse an event to hide details
        Given the user has expanded an event to view the details
        When the user clicks to collapse the details
        Then the details should be collapsed