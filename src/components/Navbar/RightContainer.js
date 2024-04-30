import React from "react";

import { navbar } from "../../utils/content";

import Button from "../Button/Button";
import Link from "../Link/Link";

const NavRightContainer = () => {
  return (
    <div className="flex items-center">
      <div
        key="registerButton"
        className=" relative md:mr-[23px] my-[3px] flex md:font-extrabold tracking-[0.5px] cursor-pointer  "
      >
        <a href={navbar.registerButton.href}>
          <Button
            text={navbar.registerButton.text}
            renderAs="button"
            buttonType="ghost"
            buttonShape="square"
            // onClick={(e) => e.stopPropagation()}
          />
        </a>
      </div>
      <div
        key="loginButton"
        className={`relative m-0 flex text-base font-semibold tracking-wider cursor-pointer`}
      >
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
