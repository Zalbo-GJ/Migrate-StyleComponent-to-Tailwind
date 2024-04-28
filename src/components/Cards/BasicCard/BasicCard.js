import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BasicCard = ({ children, borderRadius, ...otherProps }) => (
  <div
    {...otherProps}
    className={classNames(
      'bg-white',
      'border',
      'border-gray-200',
      'shadow-md',
      borderRadius,
      otherProps.className // Allow overriding Tailwind classes
    )}
  >
    {children}
  </div>
);

BasicCard.propTypes = {
  children: PropTypes.node,
  borderRadius: PropTypes.string,
};

BasicCard.defaultProps = {
  children: undefined,
  borderRadius: 'rounded-md', // Default Tailwind CSS rounded class
};

export default BasicCard;
