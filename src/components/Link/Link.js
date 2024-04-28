import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'; // Corrected import statement

const Link = ({ to, active, children, ...otherProps }) => (
  <RouterLink
    {...otherProps}
    to={to}
    className={`text-${active === 'true' ? 'primary' : 'link'} hover:text-primary`}
  >
    {children}
  </RouterLink>
  
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
