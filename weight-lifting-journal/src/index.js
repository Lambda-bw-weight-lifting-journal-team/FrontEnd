import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { signUpreducer } from './reducer/Reducer';

const store = createStore(
  combineReducers({
    signup: signUpreducer,
  }), applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App store={store} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

