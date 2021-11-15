import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import './nprogress.css';
import './App.css';
import EventList from './components/EventList/EventList';
import CitySearch from './components/CitySearch/CitySearch';
import NumberOfEvents from './components/NumberOfEvents/NumberOfEvents';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({
      showWelcomeScreen: !(code || isTokenValid)
    });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, count) => {
    this.setState({
      currentLocation: location
    });
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
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div>
        <Container fluid className="app">
          <Row>
            <h1 className="heading">Networking Meetups</h1>
            <CitySearch locations={this.state.locations} numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
          </Row>
          <Row>
            <NumberOfEvents updateCount={this.updateCount} numberOfEvents={this.state.numberOfEvents} />
          </Row>
          <Row className="event-list">
            <EventList events={this.state.events.slice(0, this.state.numberOfEvents)} />
          </Row>
        </Container>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    )
  }
}

export default App;
