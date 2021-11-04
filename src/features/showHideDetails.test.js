import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user is viewing all events', () => {

        });

        when('the user has not opened any event', () => {

        });

        then('all events should be collapsed', () => {

        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('all events are collapsed', () => {

        });

        when('the user clicks to see a single events details', () => {

        });

        then('the event\'s details should become visible', () => {

        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
        given('the user has expanded an event to view the details', () => {

        });

        when('the user clicks to collapse the details', () => {

        });

        then('the details should be collapsed', () => {

        });
    });

});