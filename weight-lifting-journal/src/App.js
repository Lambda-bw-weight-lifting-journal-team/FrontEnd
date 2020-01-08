import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// components
import SignIn from './components/SignIn';
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from './components/Navigation';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <SignIn/>          
      </div>
      <div>
        <PrivateRoute path="/protected" component={Profile} />
      </div>
    </Router>
  );
};
export default App;
