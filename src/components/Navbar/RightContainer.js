import React from "react";

import { navbar } from "../../utils/content";
import font from "../../utils/font";
import Button from "../Button/Button";
import Link  from "../Link/Link";

const NavRightContainer = () => {
  return (
    <div className="flex">
      <div key="registerButton"  className={`relative ${false ? 'm-0' : 'm-auto mr-6'} flex text-base font-semibold tracking-wider font-${font.fontFamily} text-link cursor-pointer animate-none`}>

        <Link to={navbar.registerButton.href}>
          <Button
            text={navbar.registerButton.text}
            renderAs="button"
            buttonType="ghost"
            buttonShape="square"
            // onClick={(e) => e.stopPropagation()}
          />
        </Link>
        
        </div>
      <div key="loginButton" className={`relative ${true ? 'm-0' : 'm-auto mr-6'} flex text-base font-semibold tracking-wider font-${font.fontFamily} text-link cursor-pointer animate-none`}>

        <Link to={navbar.loginButton.href}>
          <Button
            text={navbar.loginButton.text}
            renderAs="button"
            buttonType="basic"
            buttonShape="square"
            // onClick={(e) => e.stopPropagation()}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavRightContainer;
