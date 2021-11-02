import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import './NumberOfEvents.css';

class NumberOfEvents extends Component {

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateCount(value);
    };

    render() {
        const { numberOfEvents } = this.props;
        return (
            <Form className="total-events-viewed">
                <h5 className="search-heading">Select Number of Events to View</h5>
                <h6 className="number-of-events">{numberOfEvents}</h6>
                <Form.Range
                    className="numbers"
                    value={numberOfEvents}
                    onChange={this.handleInputChanged}
                    min="1"
                    max="50"
                />
            </Form>
        );
    }
}

export default NumberOfEvents;