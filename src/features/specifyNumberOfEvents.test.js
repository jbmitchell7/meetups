import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When the user hasn\'t specified a number of events to view, 32 should be shown', ({ given, when, then }) => {
        given('the user is viewing events', () => {

        });
        let AppWrapper
        when('the user has not selected a number of events to view', () => {
            AppWrapper = mount(<App />);
        });

        then('32 events should be displayed', () => {
            expect(AppWrapper.state('numberOfEvents')).toBe(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is viewing events', () => {
            AppWrapper = mount(<App />);
        });

        when('the user changes the number of events to view', () => {
            AppWrapper.find('.form-range').simulate('change', { target: { value: 10 } });
        });

        then('the number of events in view should change to the selected value', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toBe(10);
        });
    });
});