import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div id="layout" className="box-border">{children}</div>; {/* Replaced styled component with Tailwind CSS */}
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: "",
};

export default Layout;
