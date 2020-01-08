import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// components
import SignIn from './components/SignIn';
import { Route } from "react-router-dom";
import FormikUserSignUpForm from './components/SignUp';
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from './components/Navigation';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <SignIn />
        <Route exact path='/' render={props => <FormikUserSignUpForm {...props} />} />
        <Route path='/sign-up' render={props => <FormikUserSignUpForm {...props} />} />
      </div>
      <div>
        <PrivateRoute path="/protected" component={Profile} />
      </div>
    </Router>
  );
};
export default App;
