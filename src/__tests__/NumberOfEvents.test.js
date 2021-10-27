import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render text display', () => {
        expect(NumberOfEventsWrapper.find(".event-number")).toHaveLength(1);
    });

    // test('renders a list of suggestions', () => {
    //     expect(NumberOfEventsWrapper.find('.suggestions')).toHaveLength(1);
    // });

    // test('renders text input correctly', () => {
    //     const query = NumberOfEventsWrapper.state('query');
    //     expect(NumberOfEventsWrapper.find('.city').prop('value')).toBe(query);
    // });

    // test('change state when text input changes', () => {
    //     NumberOfEventsWrapper.setState({
    //         query: 'Munich'
    //     });
    //     const eventObject = { target: { value: 'Berlin' } };
    //     NumberOfEventsWrapper.find('.city').simulate('change', eventObject);
    //     expect(NumberOfEventsWrapper.state('query')).toBe('Berlin');
    // });
})