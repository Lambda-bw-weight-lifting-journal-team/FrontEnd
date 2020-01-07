import React from 'react';
import SignIn from './components/SignIn';
import { Route } from "react-router-dom";
import FormikUserSignUpForm from './components/SignUp';

function App() {
  return (
    <div className="App">
    <SignIn/>
    <Route exact path='/' render={props => <FormikUserSignUpForm {...props} />}/>     
    <Route path='/sign-up' render={props => <FormikUserSignUpForm {...props} />}/>
    </div>
  );
}

export default App;
