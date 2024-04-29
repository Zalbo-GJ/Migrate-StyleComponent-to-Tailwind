import React from "react";

import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";

const Navbar = () => {
  return (
    <div className=" z-[100] h-[76px] py-3 px-[1.875em] box-border relative top-0 w-full flex justify-between items-center max-w-[1235px] mx-auto">
      <LeftContainer />

      <RightContainer />
    </div>
  );
};

export default Navbar;
