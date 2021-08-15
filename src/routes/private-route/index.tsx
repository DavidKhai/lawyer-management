import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "constants/route";
import { useAppSelector } from "app/hooks";
import { getIsAuthenticated } from "reducers/login-reducer/login.selector";
import { PrivateLayout } from "components/layouts";

function PrivateRoute({ component: Component, ...props }: any) {
  const isAuthenticated = useAppSelector(getIsAuthenticated);
  return (
    <Route
      {...props}
      render={({ location }) => {
        return isAuthenticated ? (
          <PrivateLayout>
            <Component />
          </PrivateLayout>
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
