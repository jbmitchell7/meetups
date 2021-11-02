import React, { Component } from 'react';

import './NumberOfEvents.css';

class NumberOfEvents extends Component {

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateCount(value);
    };

    render() {
        const { numberOfEvents } = this.props;
        return (
            <div className="total-events-viewed">
                <h6 className="search-heading">Select Number of Events to View</h6>
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