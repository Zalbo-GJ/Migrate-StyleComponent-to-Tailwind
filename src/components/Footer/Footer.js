import React from "react";
import { withRouter } from "react-router-dom";

import { isActiveLink } from "../../utils/constants";
import { footer } from "../../utils/content";
import Link from "../Link/Link";

const Footer = withRouter(() => {
  return (
    <footer className="fixed bottom-0 z-[100] box-border flex h-[55px] w-full justify-between border-t border-lightGray bg-white px-[30px] py-2">
      <div className=" my-auto flex ">
        <div className=" my-auto mr-[30px] flex text-[14px] font-bold tracking-[0.5px]">
          <div className=" text-gray">{footer.copyright}</div>
        </div>
        {footer.innerLinks.map(({ href, text }, i) => (
          <div
            className=" my-auto mr-[30px] flex text-[14px] font-bold tracking-[0.5px]"
            key={`innerLink${i}`}
          >
            <Link to={href} active={isActiveLink(href)}>
              {text}
            </Link>
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
              className=" ml-[10px] h-[39px] cursor-pointer"
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
