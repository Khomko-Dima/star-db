import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
// import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage
} from '../pages';

import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

  swapiService = new SwapiService();
  // swapiService = new DummySwapiService();

  render() {
    return (

      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <Router>

            <div className="stardb-app">
              <Header />
              <RandomPlanet/>
              
                <Route path="/" 
                        render={() => <h2>Welcome to StartDB</h2>}
                        exact />
                <Route path="/people" 
                        render={() => <h2>People</h2>}
                        exact />
                <Route path="/people" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} />

            </div>

          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>

    );
  }
}
