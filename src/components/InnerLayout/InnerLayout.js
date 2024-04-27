import React from 'react';
import PropTypes from 'prop-types';

import { InnerLayoutComponent } from './styles';

const InnerLayout = ({ children }) => (
  <InnerLayoutComponent id="innerLayout">{children}</InnerLayoutComponent>
);

InnerLayout.propTypes = {
  children: PropTypes.node,
};

InnerLayout.defaultProps = {
  children: '',
};

export default InnerLayout;
