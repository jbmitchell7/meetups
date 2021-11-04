import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When the user hasn\'t specified a number of events to view, 32 should be shown', ({ given, when, then }) => {
        given('the user is viewing events', () => {

        });

        when('the user has not selected a number of events to view', () => {

        });

        then('32 events should be displayed', () => {

        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user is viewing events', () => {

        });

        when('the user changes the number of events to view', () => {

        });

        then('the number of events in view should change to the selected value', () => {

        });
    });
});