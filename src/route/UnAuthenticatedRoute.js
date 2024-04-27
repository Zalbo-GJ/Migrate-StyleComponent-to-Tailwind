import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const UnAuthenticatedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = Cookies.get("AuthToken");

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/discover" /> : <Component {...props} />
      }
    />
  );
};

export default UnAuthenticatedRoute;
