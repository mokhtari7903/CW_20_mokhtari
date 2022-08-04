import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

interface IUserLayoutProps {
  children: ReactNode;
}

function UserLayout({ children }: IUserLayoutProps) {
  return (
    <div>
      <Header />
      <div style={{ margin: "auto", width: "75%" }}>{children}</div>
    </div>
  );
}

export default UserLayout;
