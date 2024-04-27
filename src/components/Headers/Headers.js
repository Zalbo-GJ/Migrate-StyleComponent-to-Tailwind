import React from "react";
import PropTypes from "prop-types";

import {
  H1 as H1Component,
  H2 as H2Component,
  H3 as H3Component,
  H4 as H4Component,
  H5 as H5Component,
  H6 as H6Component,
} from "./styles";

const H1 = ({ children, ...otherProps }) => (
  <H1Component {...otherProps}>{children}</H1Component>
);
const H2 = ({ children, ...otherProps }) => (
  <H2Component {...otherProps}> {children}</H2Component>
);
const H3 = ({ children, ...otherProps }) => (
  <H3Component {...otherProps}>{children}</H3Component>
);
const H4 = ({ children, ...otherProps }) => (
  <H4Component {...otherProps}>{children}</H4Component>
);
const H5 = ({ children, ...otherProps }) => (
  <H5Component {...otherProps}>{children}</H5Component>
);
const H6 = ({ children, ...otherProps }) => (
  <H6Component {...otherProps}>{children}</H6Component>
);

H1.propTypes = H2.propTypes = H3.propTypes = H4.propTypes = H5.propTypes = H6.propTypes = {
  children: PropTypes.node,
};

H1.defaultProps = H2.defaultProps = H3.defaultProps = H4.defaultProps = H5.defaultProps = H6.defaultProps = {
  children: "",
};

export { H1, H2, H3, H4, H5, H6 };
