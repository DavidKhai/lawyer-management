import React from "react";

import { Button } from "components/ui-library";

import "./index.scss";
import { useAppDispatch } from "app/hooks";
import { logout } from "reducers/login-reducer/login.store";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="header-container">
      <span>Header</span>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  );
};

export default Header;
