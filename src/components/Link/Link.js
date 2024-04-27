import React from 'react';
import PropTypes from 'prop-types';

import { Link as LinkComponent } from './styles';

const Link = ({ to, active, children, ...otherProps }) => (
  <LinkComponent {...otherProps} to={to} active={active}>
    {children}
  </LinkComponent>
);

Link.propTypes = {
  to: PropTypes.string,
  active: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  to: '',
  active: 'false',
  children: '',
};
export default Link;
