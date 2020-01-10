import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
//import { Motion, spring } from 'react-motion';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 75%;
  height: 100%;
  margin: 2% auto;
  padding: 2%;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;
  
  `;

function UserForm({ values, errors, touched, status }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status])



    return (
        // <Motion 
        // defaultStyle={{x: -200, opacity: 0}} 
        // style={{x: spring(0), opacity:1}}
        // >
            // {style => (
        <StyledDiv /*style={{opacity: style.opacity }}*/>
            <Form>
                <h1>User Registration</h1>
                <label>
                    User Name:
                    <Field type="text" name="username" placeholder="Enter a User Name" autoComplete="none" />
                    {touched.name && errors.name && (
                        <p className="errors">{errors.name}</p>
                    )}
                </label>
                <br />
                <label>
                    Password:
                <Field type="password" name="password" placeholder="Enter a Password" autoComplete="none" />
                    {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>
                    )}
                </label>
                <br />
                <button type="submit" >Submit</button>
            </Form>
            {users.map(user => (
                <div key={user.id}>
                    <h2>New User!</h2>
                    <p>Name: {user.username}</p>
                    <p>Welcome!</p>
                </div>
            ))}
        </StyledDiv>
    //    )}
    //    </Motion>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        axios.post('https://bw-weight-lifting.herokuapp.com/api/auth/register', values)
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