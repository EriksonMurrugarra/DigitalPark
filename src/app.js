import React from 'react';
import { render } from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
// router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// components
import HandleError from './error/containers/handle-error';
import Header from './header/components/header';
// pages
import Blog from './pages/containers/blog';
import Courses from './pages/containers/courses';
import CourseDetail from './pages/containers/course-detail';
import NotFound from './pages/components/not-found';

import './styles/app.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/course/:courseId" component={CourseDetail} />
          <Route path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
