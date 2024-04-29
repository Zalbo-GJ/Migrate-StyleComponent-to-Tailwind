import React from "react";
import { withRouter } from "react-router-dom";

import { isActiveLink } from "../../utils/constants";
import { footer } from "../../utils/content";

const Footer = withRouter(() => {
  return (
    <footer className="box-border border-t border-lightGray h-[55px] py-2 px-[30px] bottom-0 fixed w-full flex bg-white justify-between z-[100]">
      <div className=" flex my-auto ">
        <div className=" my-auto mr-[30px] flex text-[14px] font-bold tracking-[0.5px]">
          <div className=" text-gray">{footer.copyright}</div>
        </div>
        {footer.innerLinks.map(({ href, text }, i) => (
          <div
            className=" my-auto mr-[30px] flex text-[14px] font-bold tracking-[0.5px]"
            key={`innerLink${i}`}
          >
            <a
              href={href}
              active={isActiveLink(href)}
              className=" hover:text-primary active:text-primary"
            >
              {text}
            </a>
          </div>
        ))}
      </div>
      <div className="flex text-[14px] font-bold tracking-[0.5px]">
        {footer.outerImgLinks.map(({ href, text, icon }, i) => (
          <a
            className=" hover:text-primary active:text-primary"
            rel="noopener noreferrer"
            href={href}
            target="_blank"
            key={`outerLink${i}`}
          >
            <img
              className=" h-[39px] ml-[10px] cursor-pointer"
              src={icon}
              alt={text}
            />
          </a>
        ))}
      </div>
    </footer>
  );
});

export default Footer;
