import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import NProgress from "nprogress";
import Router from "next/router";
import SideNav from "../Navbar/Menu/SideNav/SideNav";
import SideClosed from "../Navbar/Menu/SideNav/SideClosed";

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
  const [ToggleNav, setToggleNav] = useState(true);
  return (
    <div>
      <Navbar ToggleNav={ToggleNav} setToggleNav={setToggleNav} />
      {ToggleNav ? <SideClosed /> : <SideNav />}
    </div>
  );
}

export default Header;
