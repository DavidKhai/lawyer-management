import { ROUTES } from "constants/route";
import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import PublicRoute from "./public-route";
import PrivateRoute from "./private-route";
import { Dashboard, Login } from "pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from={"/"} to={ROUTES.DASHBOARD} />
        {/* Public routes */}
        <PublicRoute exact path={ROUTES.LOGIN} component={Login} />
        {/* Private routes */}
        <PrivateRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
