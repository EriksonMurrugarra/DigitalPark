import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import HandleError from './error/containers/handle-error';
import Blog from './pages/containers/blog';
import Courses from './pages/containers/courses';
import Header from './header/components/header';
import './styles/app.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
