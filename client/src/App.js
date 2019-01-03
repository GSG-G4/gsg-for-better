import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/:teamId" component={LandingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
