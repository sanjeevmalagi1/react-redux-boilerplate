import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './js/reducers'

import Routes from './routes';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const wrapper = document.getElementById("container");
if(wrapper) {
  ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, wrapper
  )
}
