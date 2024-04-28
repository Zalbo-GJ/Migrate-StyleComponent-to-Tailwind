import React from 'react';
import PropTypes from 'prop-types';

const InnerLayout = ({ children }) => (
  <div id="innerLayout" className="my-16 pb-10"> {/* Added Tailwind CSS classes */}
    {children}
  </div>
);

InnerLayout.propTypes = {
  children: PropTypes.node,
};

InnerLayout.defaultProps = {
  children: '',
};

export default InnerLayout;
