import React, { useState } from 'react';
import axios from "axios";
import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 75%;
  height: 200px;
  margin: 2% auto;
  padding: 2%;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;
  `;

  function SignIn(props) {
    const [userInput, setUserInput] = useState({
      username: '',
      password: ''
    })
    function handleChange(e) {
      setUserInput({...userInput, [e.target.name]: e.target.value});
    }
    function submitForm(e) {
      e.preventDefault();
      axios.post('https://bw-weight-lifting.herokuapp.com/api/auth/login', userInput)
        .then(res => {
          console.log(res.data)
        //  localStorage.setItem('token', res.data.token);

        })
        .catch(err => {
          console.log("Login error:",err);
        })
        setUserInput({
          ...userInput,
          username: '',
          password: ''
        });
    }
    return (
        <StyledLogin> 
            <h1>Login</h1>
          <form onSubmit={submitForm} className='forms'>

              <label htmlFor="username">Username: </label>
              <input type='text' 
                name='username' 
                value={userInput.username} 
                id='username' 
                placeholder='Enter username'
                onChange={handleChange}
                required
               />
               <br />


              <label htmlFor='password'>Password: </label>
              <input type='password' 
                name='password' 
                value={userInput.password} 
                id='password'
                placeholder='Enter password'
                onChange={handleChange}
                required /><br />

              <button type='submit'>Log In</button>
          </form>
          </StyledLogin>
    )};

    export default SignIn;
