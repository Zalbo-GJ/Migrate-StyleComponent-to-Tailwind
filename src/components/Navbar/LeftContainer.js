import React from "react";

import { navbar } from "../../utils/content";

const NavLeftContainer = () => {
  return (
    <div className="flex">
      {navbar.links.map(({ href, icon, text }, i) => (
        <div
          className=" relative mr-[23px] my-[3px] flex text-[14px] font-extrabold tracking-[0.5px] cursor-pointer  "
          key={`links${i}`}
        >
          <a className=" my-auto " href={"/"}>
            <div className=" text-[24px] my-auto leading-[46px] text-midLightGray font-normal flex  ">
              {icon && (
                <img
                  className="mr-[10px] w-[30px] my-2 "
                  src={icon.Logo}
                  alt={text}
                />
              )}
              PincoPanco
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NavLeftContainer;
