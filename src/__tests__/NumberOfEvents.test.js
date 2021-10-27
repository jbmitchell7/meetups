import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render text display', () => {
        expect(NumberOfEventsWrapper.find(".numbers").prop('value')).toEqual(32);
    });

    test('change state when text input changes', () => {
        NumberOfEventsWrapper.setState({
            numberOfEvents: 32
        });
        const numChange = { target: { value: 10 } };
        NumberOfEventsWrapper.find('.numbers').simulate('change', numChange);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
    });
})