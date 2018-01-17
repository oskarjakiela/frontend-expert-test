import PropTypes from 'prop-types';
import { map } from 'ramda';
import React from 'react';

import './ResultsList.css';
import ResultsListItem from './ResultsListItem';


const ResultsList = ({ items }) => (
  <div className="ResultsList">
    <h2 className="ResultsList__title">Result List</h2>

    <div className="ResultsList__items">
      {map(item => (<ResultsListItem {...item} />), items)}
    </div>
  </div>
);

ResultsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResultsList;
