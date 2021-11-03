import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import './nprogress.css';
import './App.css';
import EventList from './components/EventList/EventList';
import CitySearch from './components/CitySearch/CitySearch';
import NumberOfEvents from './components/NumberOfEvents/NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all'
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, count) => {
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      locationEvents = locationEvents.slice(0, count);
      this.setState({
        events: locationEvents,
      });
    });
  }

  updateCount = (count) => {
    this.setState({
      numberOfEvents: count
    });
    const { currentLocation } = this.state;
    this.updateEvents(currentLocation, count);
  }

  render() {
    return (
      <Container fluid className="app">
        <Row>
          <h1 className="heading">Networking Meetups</h1>
          <CitySearch locations={this.state.locations} numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        </Row>
        <Row>
          <NumberOfEvents updateCount={this.updateCount} numberOfEvents={this.state.numberOfEvents} />
        </Row>
        <Row>
          <EventList events={this.state.events.slice(0, this.state.numberOfEvents)} />
        </Row>
      </Container>
    )
  }
}

export default App;
