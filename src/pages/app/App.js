'use strict';

import React from 'react';

import {
  Route
} from 'react-router-dom';

import Home from '../home/Home';
import Register from "../user/Register";
import Login from "../user/Login";
// import Samp from "../samp/Samp";
// import List from "../samp/List";

import {Provider} from 'react-redux';
import store from "../../redux/store";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          {/* <Route exact path="/" component={Samp}/>
          <Route path="/list" component={List}/> */}
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/Login" component={Login}/>
        </div>
      </Provider>
    );
  }
}

export default App;
