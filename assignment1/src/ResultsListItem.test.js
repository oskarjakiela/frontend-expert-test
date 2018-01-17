import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';

import ResultsListItem from './ResultsListItem';


describe('<ResultsListItem />', () => {
  let component;

  beforeEach(() => {
    component = (<ResultsListItem
      city="Wonderland"
      name="Foo"
      venue="Bar"
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
