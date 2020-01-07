import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

function LoginForm({ values, errors, touched, status }) {
    const [username, setusername] = useState([]);

    useEffect(() => {
        status && setusername(username => [...username, status]);
    }, [status])


    
    return (
        <StyledLogin>

            <section>
            <Form>
                <h1>User Sign In</h1>
                <label>
                    User Name: 
                    <Field type="text" name="username" placeholder="Enter username" autoComplete="none"/>
                    {touched.username && errors.username && (
                        <p>{errors.username}</p>
                    )}
                </label>
                <br/>
                <label>
                    Password:
                <Field type="password" name="password" placeholder="Enter Password"  autoComplete="none"/>
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}                    
                </label>
                <br/>
                <label>
                    Remember User Name?:
                    <Field type="checkbox" className="checkbox" name="tos" checked={values.tos} />
                </label>
                <button type="submit" >Submit</button><br/>
                <Link to="/sign-up">Register</Link>
            </Form>
            {username.map(username => (
                <div key={username.id}>
                    <h2>Welcome Back!</h2>
                    <p>Name: {username.username}</p>
                    <p>Add a workout</p>
                    <button>Lets Get Started</button>
                </div>
            ))}
            </section>
        </StyledLogin>
        
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password, }) {
        return {
            username: username || "",
            password: password || "",

        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        password: Yup.string().required(),
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        axios
        .get('https://reqres.in/api/users', values)
        .then(res => {
            setStatus(res.data);
            console.log(res);
        })
        .catch(err => {
            console.log(err.response);
        })
        .finally(resetForm())
    }
})(LoginForm)

export default FormikLoginForm;