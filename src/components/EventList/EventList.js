import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import Event from '../Event/Event';
import './EventList.css'

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
            <>
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