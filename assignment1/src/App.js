import axios from 'axios';
import { compose, map, pathOr, pick } from 'ramda';
import React, { Component } from 'react';

import './App.css';
import { API_URL } from './constants';


class App extends Component {
  componentDidMount() {
    axios.get(API_URL)
      .then(pick(['data']))
      .then((newState) => this.setState(newState));
  }

  render() {
    const renderResults = compose(
      map(({ id, name }) => <div key={id}>{ name }</div>),
      pathOr([], ['data', 'rows'])
    );

    return (
      <div className="App">
        { renderResults(this.state) }
      </div>
    );
  }
}

export default App;
