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

    dateConvert = (date) => {
        const year = date.substr(0, 4);
        const month = date.substr(5, 2);
        const day = date.substr(8, 2);
        return `Date: ${month}-${day}-${year}`;
    }

    timeConvert = (date) => {
        const time = date.substr(11, 5);
        return `${time}`;
    }

    render() {
        const { event } = this.props;
        const { collapsed } = this.state;
        const startTime = this.timeConvert(event.start.dateTime);
        const endTime = this.timeConvert(event.end.dateTime);
        const date = this.dateConvert(event.start.dateTime);

        return (
            <Card className="bg-dark text-white event">
                <Card.Body className="event-body">
                    <Card.Title className="event-summary" as="h2">{event.summary}</Card.Title>
                    <Card.Text className="event-location">City: {event.location}</Card.Text>
                    <Card.Text className="event-date">{date}</Card.Text>
                    <Card.Text className="event-start-time">Start Time: {startTime}</Card.Text>
                    <Card.Text className="event-end-time">End Time: {endTime}</Card.Text>
                    <Button id="toggle-details" variant="info" onClick={this.handleToggleDetails}>Show/Hide Details</Button>

                    {!collapsed && (
                        <Card.Text className="event-details">{event.description}</Card.Text>
                    )}
                </Card.Body>
            </Card>
        )
    }
}
export default Event;