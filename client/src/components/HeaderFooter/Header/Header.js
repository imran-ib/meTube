import React from "react";
import Navbar from "./Navbar";

import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function Header() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Header;
