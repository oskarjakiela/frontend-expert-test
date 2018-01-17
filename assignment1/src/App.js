import axios from 'axios';
import { compose, map, pathOr, pick } from 'ramda';
import { renameKeys } from 'ramda-adjunct';
import React, { Component } from 'react';

import './App.css';
import { API_URL } from './constants';
import ResultsList from './ResultsList';


const mapResponseToState = (response) => {
  const items = compose(
    map(compose(
      renameKeys({
        id: 'key',
        location_city: 'city',
        location_name: 'venue',
      }),
      pick(['id', 'location_city', 'location_name', 'name'])),
    ),
    pathOr([], ['data', 'rows']),
  )(response);

  return { items }
};

class App extends Component {
  state = {
    items: [],
    markers: [],
  }

  componentDidMount() {
    axios.get(API_URL)
      .then(mapResponseToState)
      .then((newState) => this.setState(newState));
  }

  render() {
    const { items } = this.state;

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
