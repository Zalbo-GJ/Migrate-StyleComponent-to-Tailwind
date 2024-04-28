import React from "react";

import Link from "../Link/Link";
import font from "../../utils/font";
import { navbar } from "../../utils/content";

const NavLeftContainer = () => {
  return (
    <div className="flex">
      {navbar.links.map(({ href, icon, text }, i) => (
        <div
          className={`relative ${
            false ? "m-0" : "m-auto mr-6"
          } flex text-base font-semibold tracking-wider font-${
            font.fontFamily
          } text-link cursor-pointer animate-none`}
          key={`links${i}`}
        >
          <Link to={href}>
            <div className="text-3xl leading-11 text-midLightGray mb-44 font-normal flex items-center">
              {icon && <img className="mr-2 w-6" src={icon.Logo} alt={text} />}
              PincoPanco
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLeftContainer;
