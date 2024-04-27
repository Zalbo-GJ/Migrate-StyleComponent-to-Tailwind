import React from "react";
import PropTypes from "prop-types";

import { LayoutComponent } from "./styles";

const Layout = ({ children }) => {
  return <LayoutComponent id="layout">{children}</LayoutComponent>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: "",
};

export default Layout;
