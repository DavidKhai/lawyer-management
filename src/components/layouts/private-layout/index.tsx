import React, { ReactNode } from "react";
import { Layout } from "components/ui-library";

import "./index.scss";
import { Header } from "components";

const { Content } = Layout;

interface IProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: IProps) => {
  return (
    <Layout className="pp_layout">
      <Header />
      <Content>{children}</Content>
    </Layout>
  );
};

export default PrivateLayout;
