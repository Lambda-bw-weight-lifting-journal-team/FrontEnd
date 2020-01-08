import React, { useState } from 'react';
import axios from 'axios';
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
      <div>
        <div> 
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
          </div>
        </div>
    )};

    export default SignIn;

// function SigIn({ values, errors, touched, status }) {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: ''
//     });

//     const changeHandler = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value, [`${e.target.name}Touched`]: true });
//     }

//     return (
//         <StyledLogin>

//             <section>
//             <Form onSubmit={}>
//                 <h1>User Sign In</h1>
//                 <label>
//                     User Name: 
//                     <Field type="text" name="username" placeholder="Enter username" autoComplete="none" value={FormData.username} onChange={changeHandler} required/>
//                     {touched.username && errors.username && (
//                         <p>{errors.username}</p>
//                     )}
//                 </label>
//                 <br/>
//                 <label>
//                     Password:
//                 <Field type="password" name="password" placeholder="Enter Password"  autoComplete="none" onChange={changeHandler} value={FormData.password} required/>
//                     {touched.password && errors.password && (
//                         <p>{errors.password}</p>
//                     )}                    
//                 </label>
//                 <br/>
//                 <label>
//                     Remember User Name?:
//                     <Field type="checkbox" className="checkbox" name="tos" checked={values.tos} />
//                 </label>
//                 <button type="submit" >Submit</button><br/>
//                 <Link to="/sign-up">Register</Link>
//             </Form>
//             {FormData.username.map(username => (
//                 <div key={username.id}>
//                     <h2>Welcome Back!</h2>
//                     <p>Name: {username.username}</p>
//                     <p>Add a workout</p>
//                     <button>Lets Get Started</button>
//                 </div>
//             ))}
//             </section>
//         </StyledLogin>
        
//     )
// }

// const FormikLoginForm = withFormik({
//     mapPropsToValues({ username, password, }) {
//         return {
//             username: username || "",
//             password: password || "",

//         };
//     },
//     validationSchema: Yup.object().shape({
//         name: Yup.string().required(),
//         password: Yup.string().required(),
//     }),
//     handleSubmit(values, { setStatus, resetForm }) {
//         axios
//         .get('https://reqres.in/api/users', values)
//         .then(res => {
//             setStatus(res.data);
//             console.log(res);
//         })
//         .catch(err => {
//             console.log(err.response);
//         })
//         .finally(resetForm())
//     }
// })(LoginForm)

// export default FormikLoginForm;