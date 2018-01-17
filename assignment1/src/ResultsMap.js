import { join, map, values } from 'ramda';
import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from 'recompose'

import './ResultsMap.css';


const key = compose(
  join(','),
  values,
);

const googleMapElement = () => (<div className="ResultMap__GoogleMap__element" />);

const ResultsMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp',
    loadingElement: googleMapElement(),
    containerElement: googleMapElement(),
    mapElement: googleMapElement(),
  }),
  withScriptjs,
  withGoogleMap,
)(({ markers }) => (
  <div className="ResultsMap">
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{
          lat: 52.33,
          lng: 4.88,
        }}
      >
        {map(position => (<Marker key={key(position)} position={position} />), markers)}
      </GoogleMap>
  </div>
));

export default ResultsMap;
