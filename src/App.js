import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

import './nprogress.css';
import './App.css';
import EventList from './components/EventList/EventList';
import CitySearch from './components/CitySearch/CitySearch';
import NumberOfEvents from './components/NumberOfEvents/NumberOfEvents';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import EventGenre from './components/EventGenre/EventGenre';
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
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    const { locations, numberOfEvents, events } = this.state;
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div>
        <Container fluid className="app">
          <Row>
            <h1 className="heading">Networking Meetups</h1>
            <CitySearch locations={locations} numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
          </Row>
          <Row>
            <NumberOfEvents updateCount={this.updateCount} numberOfEvents={numberOfEvents} />
          </Row>
          <Row className="charts text-center">
            <Col lg={4} md={12} className="pie">
              <h5 className="chart-title">Event Type Distribution for Your Selection</h5>
              <EventGenre events={events} />
            </Col>
            <Col lg={8} md={12}>
              <h5 className="chart-title">Total Events per City Based on Selection</h5>
              <ResponsiveContainer height={400} className="scatter">
                <ScatterChart margin={{ top: 20, right: 50, bottom: 20, left: 0, }}>
                  <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="white" />
                </ScatterChart>
              </ResponsiveContainer>
            </Col>
          </Row>
          <Row className="event-list">
            <EventList events={events.slice(0, numberOfEvents)} />
          </Row>
        </Container>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    )
  }
}

export default App;
