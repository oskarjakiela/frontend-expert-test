import PropTypes from 'prop-types';
import { map } from 'ramda';
import React from 'react';

import './ResultsList.css';
import ResultsListItem from './ResultsListItem';


const ResultsList = ({ items }) => {
  const renderResultsListItem = map(({
    id,
    name,
    location_city,
    location_name
  }) => (
    <ResultsListItem
      key={id}
      city={location_city}
      name={name}
      venue={location_name}
    />
  ));

  return (
    <div className="ResultsList">
      <h2 className="ResultsList__title">Result List</h2>

      <div className="ResultsList__items">
        {renderResultsListItem(items)}
      </div>
    </div>
  );
};

ResultsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ResultsList;
