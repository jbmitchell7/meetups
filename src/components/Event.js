import React, { Component } from "react";

class Event extends Component {
    state = {
        collapsed: true,
    }

    handleToggleDetails = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    }

    render() {
        const { event } = this.props;
        const { collapsed } = this.state;
        return (
            <div className="event">
                <h2 className="event-summary">{event.summary}</h2>
                <div className="event-location">{event.location}</div>
                <div className="event-start">{event.start.dateTime}</div>
                <div className="event-end">{event.end.dateTime}</div>
                <button className="toggle-details" onClick={this.handleToggleDetails}>Show/Hide Details</button>

                {!collapsed && (
                    <div className="event-details">
                        <div className="event-description">{event.description}</div>
                    </div>
                )}
            </div>
        )
    }
}
export default Event;