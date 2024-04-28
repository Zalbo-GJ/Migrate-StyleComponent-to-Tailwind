import React from "react";
import { withRouter } from "react-router-dom";

import { isActiveLink } from "../../utils/constants";
import { footer } from "../../utils/content";

import Link  from "../Link/Link";

const Footer = withRouter(() => {
  return (
    <footer className="box-border h-16 px-8 bottom-0 fixed w-full bg-background border-t border-footerBorder flex justify-between items-center z-50">
      <div className="flex">
        <div className="flex items-center text-gray-500">
          {footer.innerLinks.map(({ href, text }, i) => (
            <div key={`innerLink${i}`} className="mr-8">
              <Link to={href} active={isActiveLink(href)}>
                {text}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div className="text-gray-500">{footer.copyright}</div>
        </div>
      </div>
      <div className="flex items-center">
        {footer.outerImgLinks.map(({ href, text, icon }, i) => (
          <a
            rel="noopener noreferrer"
            href={href}
            target="_blank"
            key={`outerLink${i}`}
          >
            <img src={icon} alt={text} className="h-10 ml-4 cursor-pointer" />
          </a>
        ))}
      </div>
    </footer>
  );
});

export default Footer;
