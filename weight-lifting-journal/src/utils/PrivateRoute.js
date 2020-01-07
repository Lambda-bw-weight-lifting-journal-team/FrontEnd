import React from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://bw-weight-lifting.herokuapp.com/api",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
