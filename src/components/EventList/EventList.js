import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import { WarningAlert } from '../Alert/Alert';
import Event from '../Event/Event';
import './EventList.css'

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
            <>
                {!navigator.onLine ? (
                    <WarningAlert text="You are Offline. Data may not be up-to-date." />
                ) : ("")}
                {events.map(event =>
                    <Col xl={3} lg={4} md={6} key={event.id}>
                        <Event event={event} />
                    </Col>
                )}
            </>
        );
    }
}

export default EventList;