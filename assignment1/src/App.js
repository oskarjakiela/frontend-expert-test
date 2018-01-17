import axios from 'axios';
import { pathOr, pick } from 'ramda';
import React, { Component } from 'react';

import './App.css';
import { API_URL } from './constants';
import ResultsList from './ResultsList';


class App extends Component {

  componentDidMount() {
    axios.get(API_URL)
      .then(pick(['data']))
      .then((newState) => this.setState(newState));
  }

  render() {
    const items = pathOr([], ['data', 'rows'])(this.state);

    return (
      <div className="App">
        <div className="App__aside">
          <ResultsList items={items} />
        </div>
      </div>
    );
  }
}

export default App;
