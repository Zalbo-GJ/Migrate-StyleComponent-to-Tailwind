import React from "react";

import { navbar } from "../../utils/content";
import { Link, Button } from "../";
import { Action, Links } from "./styles";

const NavRightContainer = () => {
  return (
    <Links>
      <Action key="registerButton">
        <Link to={navbar.registerButton.href}>
          <Button
            text={navbar.registerButton.text}
            renderAs="button"
            buttonType="ghost"
            buttonShape="square"
            onClick={(e) => e.stopPropagation()}
          />
        </Link>
      </Action>
      <Action key="loginButton" noMargin={true}>
        <Link to={navbar.loginButton.href}>
          <Button
            text={navbar.loginButton.text}
            renderAs="button"
            buttonType="basic"
            buttonShape="square"
            onClick={(e) => e.stopPropagation()}
          />
        </Link>
      </Action>
    </Links>
  );
};

export default NavRightContainer;
