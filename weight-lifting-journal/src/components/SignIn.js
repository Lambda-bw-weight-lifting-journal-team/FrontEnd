import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from "yup";
import axios from "axios";

function UserForm({ values, errors, touched, status }) {
    const [username, setpassword] = useState([]);

    useEffect(() => {
        status && setpassword(username => [...username, status]);
    }, [status])


    
    return (
        <div>
            <Form>
                <h1>User Sign In</h1>
                <label>
                    User Name: 
                    <Field type="text" name="username" placeholder="Enter username" autoComplete="none"/>
                    {touched.username && errors.username && (
                        <p>{errors.password}</p>
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
                <button type="submit" >Sign In</button>
            </Form>
        </div>
        
    )
}

const FormikUserForm = withFormik({
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
        .post('https://bw-weight-lifting.herokuapp.com/api/auth/login', values)
        .then(res => {
            setStatus(res.data);
            console.log(res);
        })
        .catch(err => {
            console.log(err.response);
        })
        .finally(resetForm())
    }
})(UserForm)

export default FormikUserForm;