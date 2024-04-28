import React from "react";

const Pill = ({ children, ...props }) => (
  <div {...props} className="px-5 py-3 font-medium text-lg leading-6 rounded-full mx-3 max-w-xs bg-white text-gray-700">{children}</div> 
);

export default Pill;
