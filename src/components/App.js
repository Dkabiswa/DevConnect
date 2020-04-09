/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Alert from './layout/Alert';
import Register from './auth/Register';
import Login from './auth/Login';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </section>
      </>
    </Router>
  </Provider>
);
export default App;
