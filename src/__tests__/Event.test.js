import React from 'react';
import { shallow } from 'enzyme';

//import EventList from '../components/EventList';
import Event from '../components/Event/Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    test('title is visible always', () => {
        expect(EventWrapper.find(".event-summary")).toHaveLength(1);
    });

    test('start time is visible always', () => {
        expect(EventWrapper.find(".event-location")).toHaveLength(1);
    });

    test('end time is visible always', () => {
        expect(EventWrapper.find(".event-location")).toHaveLength(1);
    });

    test('details not visible by default', () => {
        expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });

    test('details is visible when not collapsed', () => {
        EventWrapper.setState({
            collapsed: false
        });
        expect(EventWrapper.find(".event-details")).toHaveLength(1);
    });

    test('clicking toggle details when collapsed should change collapsed to false', () => {
        EventWrapper.setState({
            collapsed: true
        });
        EventWrapper.find("#toggle-details").simulate('click');
        expect(EventWrapper.find(".event-details")).toHaveLength(1);
    });

    test('clicking toggle details when not collapsed should change collapsed to true', () => {
        EventWrapper.setState({
            collapsed: false
        });
        EventWrapper.find("#toggle-details").simulate('click');
        expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
});