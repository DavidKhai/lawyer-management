import React, { ReactNode } from "react";

import "./index.scss";
import { Layout } from "components/ui-library";

const { Content, Footer } = Layout;

interface IProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: IProps) => {
  return (
    <Layout className="pp_layout">
      <Content className="pp_content">{children}</Content>
      <Footer className="pp_footer">
        LAW PROFILE MANAGEMENT ©2021 Powered by KT Technology
      </Footer>
    </Layout>
  );
};

export default PublicLayout;
