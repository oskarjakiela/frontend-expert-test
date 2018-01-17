import PropTypes from 'prop-types';
import React from 'react';

import './ResultsListItem.css';


const ResultsListItem = ({ city, name, venue }) => (
  <div className="ResultsListItem">
    <h3 className="ResultsListItem__name">{name}</h3>
    <h4 className="ResultsListItem__venue">{venue}</h4>
    <div className="ResultsListItem__city">{city}</div>
  </div>
);

ResultsListItem.propTypes = {
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
};

export default ResultsListItem;
