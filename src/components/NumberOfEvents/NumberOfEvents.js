import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import { ErrorAlert } from '../Alert/Alert';
import './NumberOfEvents.css';

class NumberOfEvents extends Component {

    state = {
        errorText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 0) {
            this.setState({
                errorText: 'Cannot set to a negative number'
            })
        } else {
            this.setState({
                errorText: ''
            })
            return this.props.updateCount(value);
        }
    };

    render() {
        const { numberOfEvents } = this.props;
        return (
            <Form className="total-events-viewed">
                <h5 className="search-heading">Select Number of Events to View</h5>
                <h6 className="number-of-events">{numberOfEvents}</h6>
                <ErrorAlert text={this.state.errorText} />
                <Form.Range
                    className="numbers"
                    value={numberOfEvents}
                    onChange={this.handleInputChanged}
                    min="-1"
                    max="50"
                />
            </Form>
        );
    }
}

export default NumberOfEvents;