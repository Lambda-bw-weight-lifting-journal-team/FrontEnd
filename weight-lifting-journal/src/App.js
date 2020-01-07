import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// components
import SignIn from './components/SignIn';
import AddWorkout from "./components/AddWorkout";
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
        <PrivateRoute path="/protected" component={AddWorkout} />
      </div>
    </Router>
  );
};
export default App;
