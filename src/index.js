import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './js/reducers'

import Routes from './routes';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger),
  )
);

const wrapper = document.getElementById("container");
if(wrapper) {
  ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, wrapper
  )
}
