import React from "react";
import { withRouter } from "react-router-dom";

import { isActiveLink } from "../../utils/constants";
import { footer } from "../../utils/content";

import { Link } from "../";
import { Container, Links, Action, Copyright, LogoContainer } from "./styles";

const Footer = withRouter(() => {
  return (
    <Container>
      <Links>
        <Action key="innerLinkCopyright">
          <Copyright>{footer.copyright}</Copyright>
        </Action>
        {footer.innerLinks.map(({ href, text }, i) => (
          <Action key={`innerLink${i}`}>
            <Link to={href} active={isActiveLink(href)}>
              {text}
            </Link>
          </Action>
        ))}
      </Links>
      <Action noMargin>
        {footer.outerImgLinks.map(({ href, text, icon }, i) => (
          <a
            rel="noopener noreferrer"
            href={href}
            target="_blank"
            key={`outerLink${i}`}
          >
            <LogoContainer src={icon} alt={text} />
          </a>
        ))}
      </Action>
    </Container>
  );
});

export default Footer;
