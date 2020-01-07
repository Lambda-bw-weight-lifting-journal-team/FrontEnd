import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Navigation from './Navigation'

function LoginForm({ values, errors, touched, status }) {
    const [username, setpassword] = useState([]);

    useEffect(() => {
        status && setpassword(username => [...username, status]);
    }, [status])


    
    return (
        <div>

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
                <button type="submit" >Sign In</button><br/>
                <a>Register</a>
            </Form>
            {username.map(user => (
                <div key={user.username}>
                    <h2>Welcome Back!</h2>
                    <p>Name: {user.username}</p>
                    <button>Create a new work out</button>
                </div>
            ))}
            </section>
        </div>
        
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
        .get('https://bw-weight-lifting.herokuapp.com/api/users/:id', values)
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