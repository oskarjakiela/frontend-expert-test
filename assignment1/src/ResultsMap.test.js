import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';

import ResultsMap from './ResultsMap';


describe('<ResultsMap />', () => {
  let component;

  beforeEach(() => {
    component = (<ResultsMap
      markers={[
        { lat: 0, lng: 0 },
      ]}
    />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    render(component, div);
    unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
