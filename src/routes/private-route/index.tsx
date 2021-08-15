import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "constants/route";

function PrivateRoute({ component: Component, ...props }: any) {
  const isAuthenticated: boolean = false;
  return (
    <Route
      {...props}
      render={({ location }) => {
        return isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
