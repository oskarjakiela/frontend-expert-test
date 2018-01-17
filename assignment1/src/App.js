import axios from 'axios';
import { compose, map, pathOr, pick, prop, zipObj } from 'ramda';
import { renameKeys } from 'ramda-adjunct';
import React, { Component } from 'react';

import './App.css';
import { API_URL } from './constants';
import ResultsList from './ResultsList';
import ResultsMap from './ResultsMap';


const mapResponseToState = (response) => {
  const rows = pathOr([], ['data', 'rows'], response)

  const items = compose(
    map(compose(
      renameKeys({
        id: 'key',
        location_city: 'city',
        location_name: 'venue',
      }),
      pick(['id', 'location_city', 'location_name', 'name'])
    )),
  )(rows);

  const markers = compose(
    map(compose(
      zipObj(['lat', 'lng']),
      prop('coordinate')
    )),
  )(rows);

  return { items, markers };
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
    const { items, markers } = this.state;

    return (
      <div className="App">
        <div className="App__aside">
          <ResultsList
            items={items}
          />
        </div>

        <div className="App__main">
          <ResultsMap
            markers={markers}
          />
        </div>
      </div>
    );
  }
}

export default App;
