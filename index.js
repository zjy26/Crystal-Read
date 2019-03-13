'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './src/pages/app/App';
import Home from './src/pages/home/Home';
import Register from './src/pages/user/Register';

const router = (
  <HashRouter>
    <App/>
  </HashRouter>
);

ReactDOM.render(router, document.getElementById('root'));
