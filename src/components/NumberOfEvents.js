import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;

        this.setState({
            numberOfEvents: value
        });
    };

    render() {
        const { numberOfEvents, query } = this.state;
        return (
            <div className="total-events-viewed">
                <input
                    type="text"
                    className="numbers"
                    value={numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;