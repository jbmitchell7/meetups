import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../../nprogress.css';
import './App.css';
import EventList from '../EventList/EventList';
import CitySearch from '../CitySearch/CitySearch';
import NumberOfEvents from '../NumberOfEvents/NumberOfEvents';
import { extractLocations, getEvents } from '../../api';

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
      <Row className="app">
        <CitySearch locations={this.state.locations} numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <NumberOfEvents updateCount={this.updateCount} numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events.slice(0, this.state.numberOfEvents)} />
      </Row>
    )
  }
}

export default App;
