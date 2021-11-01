import React, { Component } from 'react';

class NumberOfEvents extends Component {

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateCount(value);
    };

    render() {
        const { numberOfEvents } = this.props;
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