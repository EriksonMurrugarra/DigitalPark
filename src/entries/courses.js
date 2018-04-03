import React from 'react';
import { render } from 'react-dom';
import Courses from '../pages/containers/courses';
import Data from '../api.json';

const app = document.getElementById('app');

render(<Courses categories={Data.categories} />, app)
