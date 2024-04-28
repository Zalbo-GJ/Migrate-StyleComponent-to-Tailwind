import React from "react";

import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";

const Navbar = () => {
  return (
  <div className="z-10 h-16 px-12 py-3 box-border relative top-0 bg-nav-background w-full flex justify-between shadow-none max-w-screen-xl mx-auto">
      <LeftContainer />
      
      <RightContainer />
    </div>
  );
};

export default Navbar;

