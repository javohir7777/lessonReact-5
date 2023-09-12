import React, { Fragment } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
