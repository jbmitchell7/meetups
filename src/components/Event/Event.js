import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

import './Event.css';

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
            <Card.Body className="event">
                <Card.Title className="event-summary">{event.summary}</Card.Title>
                <Card.Text className="event-location">{event.location}</Card.Text>
                <Card.Text className="event-start">{event.start.dateTime}</Card.Text>
                <Card.Text className="event-end">{event.end.dateTime}</Card.Text>
                <Button id="toggle-details" variant="primary" onClick={this.handleToggleDetails}>Show/Hide Details</Button>

                {!collapsed && (
                    <Card.Text className="event-details">
                        <div className="event-description">{event.description}</div>
                    </Card.Text>
                )}
            </Card.Body>
        )
    }
}
export default Event;