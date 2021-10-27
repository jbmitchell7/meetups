import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        query: null
    }

    handleInputChanged = (event) => {
        const value = event.target.value;

        this.setState({
            numberOfEvents: value
        });
    };

    render() {
        const { numberOfEvents } = this.state;
        return (
            <div className="total-events-viewed">
                <p className="event-number">{numberOfEvents}</p>
                <input
                    type="text"
                    className="numbers"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;