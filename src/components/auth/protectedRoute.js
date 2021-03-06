import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  const isAuth = localStorage.getItem('isLoggedIn');
  return (
      <Route
          {...rest}
          render={props =>
              isAuth ? (
                  <Component {...props} {...rest} />
              ) : (
                      <Redirect
                          to={{
                              pathname: "/",
                              state: {
                                from: props.location
                              }
                          }}
                      />
                  )
              }
      />
  );
};
