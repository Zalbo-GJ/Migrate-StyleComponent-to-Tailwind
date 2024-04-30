import React from "react";
import { withRouter } from "react-router-dom";

import { isActiveLink } from "../../utils/constants";
import { footer } from "../../utils/content";
import Link from "../Link/Link";

const Footer = withRouter(() => {
  return (
    <footer className="fixed bottom-0 z-[100] box-border flex flex-col lg:flex-row lg:h-[55px] w-full justify-between border-t border-lightGray bg-white px-3 md:px-[30px] py-2">
      <div className=" my-auto flex justify-evenly ">
        <div className=" hidden my-auto md:mr-[30px] md:flex text-[14px] font-bold tracking-[0.5px]">
          <div className=" text-gray ">{footer.copyright}</div>
        </div>
        {footer.innerLinks.map(({ href, text }, i) => (
          <div
            className=" my-auto md:mr-[30px] flex text-[14px] font-bold tracking-[0.5px]"
            key={`innerLink${i}`}
          >
            <Link to={href} active={isActiveLink(href)}>
              {text}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly mx-9 lg:mx-0 text-[14px] mt-3 md:mt-0 font-bold tracking-[0.5px]">
        {footer.outerImgLinks.map(({ href, text, icon }, i) => (
          <a
            className=" hover:text-primary active:text-primary"
            rel="noopener noreferrer"
            href={href}
            target="_blank"
            key={`outerLink${i}`}
          >
            <img
              className=" ml-[10px] md:h-[39px] h-8 cursor-pointer"
              src={icon}
              alt={text}
            />
          </a>
        ))}
      </div>
      <div className=" my-auto mt-3 md:hidden md:mr-[30px] flex justify-center text-[14px] font-bold tracking-[0.5px]">
        <div className=" text-gray ">{footer.copyright}</div>
      </div>
    </footer>
  );
});

export default Footer;
