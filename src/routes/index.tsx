import { ROUTES } from "constants/route";
import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import PublicRoute from "./public-route";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from={"/"} to={ROUTES.DASHBOARD} />
        {/* Public routes */}
        <PublicRoute exact path={ROUTES.LOGIN} component={Login}/>
        {/* Private routes */}
        <PrivateRoute exact path={ROUTES.DASHBOARD} component={}/>
      </Switch>
    </Router>
  );
};

export default Routes;
