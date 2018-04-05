import React from 'react';
import { render } from 'react-dom';
import Courses from '../pages/containers/courses';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import '../styles/app.css';

const app = document.getElementById('app');

render(
  <Provider store={createStore(reducers)}>
    <Courses />
  </Provider>,
  app
);
