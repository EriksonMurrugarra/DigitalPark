import React from 'react';
import { render } from 'react-dom';
import Courses from './pages/containers/courses';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import HandleError from './error/containers/handle-error';
import './styles/app.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HandleError>
      <Courses />
    </HandleError>
  </Provider>,
  document.getElementById('app')
);
