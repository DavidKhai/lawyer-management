import React from "react";
import { useHistory } from "react-router";

import "./login.scss";
import { Input, Button } from "components/ui-library";
import { login } from "reducers/login-reducer/login.store";
import { ROUTES } from "constants/route";
import { useAppDispatch } from "app/hooks";

interface IProps {}

const LoginContainer = (props: IProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    await dispatch(login());
    history.push(ROUTES.DASHBOARD);
  };
  return (
    <div className="lg-container">
      <h3 className="lg-title">Login Page</h3>
      <div className="lg-field">
        <label>Username: </label>
        <Input placeholder="Username" />
      </div>
      <div className="lg-field">
        <label>Password: </label>
        <Input placeholder="Password" />
      </div>
      <div className="lg-btn">
        <Button type="primary" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginContainer;
