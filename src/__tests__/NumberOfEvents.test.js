import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../components/NumberOfEvents/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} updateCount={() => { }} />);
    });

    test('render text display', () => {
        expect(NumberOfEventsWrapper.find(".numbers").prop('value')).toBe(32);
    });
})