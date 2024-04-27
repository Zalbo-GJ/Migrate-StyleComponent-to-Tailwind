import React from 'react';
import PropTypes from 'prop-types';

import { BasicCard as BasicCardContainer } from './styles';

const BasicCard = ({ children, borderRadius, ...otherProps }) => (
  <BasicCardContainer {...otherProps} borderRadius={borderRadius}>
    {children}
  </BasicCardContainer>
);

BasicCard.propTypes = {
  children: PropTypes.node,
  borderRadius: PropTypes.string,
};

BasicCard.defaultProps = {
  children: undefined,
  borderRadius: '6px',
};

export default BasicCard;
