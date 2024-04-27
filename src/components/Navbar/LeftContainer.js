import React from "react";

import { navbar } from "../../utils/content";
import { Link } from "../";
import { Action, Links, LogoContainer, HomeLink } from "./styles";

const NavLeftContainer = () => {
  return (
    <Links>
      {navbar.links.map(({ href, icon, text }, i) => (
        <Action key={`links${i}`}>
          <Link to={href}>
            <HomeLink>
              {icon ? <LogoContainer src={icon.Logo} alt={text} /> : text}
              PincoPanco
            </HomeLink>
          </Link>
        </Action>
      ))}
    </Links>
  );
};

export default NavLeftContainer;
