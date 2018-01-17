import axios from 'axios'
import moxios from 'moxios'
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';
import { API_URL } from './constants';


describe('<App />', () => {
  const rows = [{
    id: 1,
    name: 'Foo 1',
    location_name: 'Bar',
    location_city: 'Wonderland',
  }, {
    id: 2,
    name: 'Foo 2',
    location_name: 'Bar',
    location_city: 'Wonderland',
  }];

  beforeEach(() => {
    moxios.install();

    moxios.stubRequest(API_URL, {
      status: 200,
      response: { rows },
    })
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('renders without crashing', (done) => {
    const div = document.createElement('div');

    render(<App />, div);

    moxios.wait(() => {
      unmountComponentAtNode(div);
      done();
    });
  });

  it('renders correctly', (done) => {
    const component = renderer.create(<App />)

    moxios.wait(() => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      done();
    });
  });

});
