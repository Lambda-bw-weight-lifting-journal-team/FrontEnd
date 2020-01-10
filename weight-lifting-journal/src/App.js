import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
// components
import SignIn from './components/SignIn';
import FormikUserForm from './components/SignUp';
import Profile from "./components/Profile";
import Navigation from './components/Navigation';

// import PrivateRoute from "./components/PrivateRoute";
import { PrivateRoute } from './utils/PrivateRoute'
// import { Navigation } from './components/Navigation';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <PrivateRoute path="/profile" component={Profile}>
          <Route exact path='/profile' render={props => <Profile {...props} />} />
        </PrivateRoute>

        <Route exact path='/' render={props => <FormikUserForm {...props} />} />

        <Route path='/signup' render={props => <FormikUserForm {...props} />} />
        <Route exact path='/login' render={props => <SignIn {...props} />} />
      </div>
    </Router>
  );
};
export default App;
