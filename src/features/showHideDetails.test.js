import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../components/Event/Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user is viewing all events', () => { });

        let AppWrapper;
        when('the user has not opened any event', () => {
            AppWrapper = mount(<App />);
        });

        then('all events should be collapsed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-details').hostNodes()).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let EventWrapper;
        given('all events are collapsed', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
        });

        when('the user clicks to see a single events details', () => {
            EventWrapper.find('#toggle-details').simulate('click');
        });

        then('the event\'s details should become visible', () => {
            EventWrapper.update();
            expect(EventWrapper.find('.event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let EventWrapper;
        given('the user has expanded an event to view the details', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            EventWrapper.find('#toggle-details').simulate('click');
        });

        when('the user clicks to collapse the details', () => {
            EventWrapper.update();
            EventWrapper.find('#toggle-details').simulate('click');
        });

        then('the details should be collapsed', () => {
            EventWrapper.update();
            expect(EventWrapper.find('.event-details')).toHaveLength(0);
        });
    });

});