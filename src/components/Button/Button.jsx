import React from "react";
import PropTypes from "prop-types";

const Button = ({
  text,
  buttonType,
  buttonShape,
  buttonSize,
  icon,
  ...otherProps
}) => {
  // Determine button classes based on props
  const buttonClasses = `border ${
    buttonShape === "square" ? "rounded-md" : "rounded-lg"
  } 
                        ${buttonSize === "small" ? "px-2 py-1" : "px-6 py-3"}
                        text-base font-large leading-6 
                         
                        focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-offset-gray-100 focus:ring-indigo-500`;

  // Determine button background and text color based on buttonType
  let backgroundColorClass = "";
  let textColorClass = "";
  let borderColorClass = "";

  switch (buttonType) {
    case "ghost":
      backgroundColorClass = "bg-transparent";
      borderColorClass = "border-transparent";
      textColorClass = "text-darkGray";
      break;
    case "basic":
      backgroundColorClass = "bg-lightBlue";
      borderColorClass = "border-lightBlue";
      textColorClass = "text-orange";
      break;
    default:
      break;
  }

  return (
    <button
      {...otherProps}
      className={`${buttonClasses} ${backgroundColorClass} ${textColorClass} ${borderColorClass}`}
    >
      {icon && <i className={`fa fa-${icon}`}></i>}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  buttonType: PropTypes.oneOf([
    "default",
    "primary",
    "ghost",
    "basic",
    "danger",
    "success",
  ]),
  buttonShape: PropTypes.oneOf(["rounded", "square"]),
  buttonSize: PropTypes.oneOf(["default", "small"]),
  icon: PropTypes.string,
};

Button.defaultProps = {
  text: "",
  buttonType: "default",
  buttonShape: "square",
  buttonSize: "default",
  icon: null,
};

export default Button;
