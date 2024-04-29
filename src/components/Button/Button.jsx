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
  const buttonClasses = ` ${
    buttonShape === "square" ? "rounded-[8px]" : "rounded-[1.66667em]"
  } 
                        ${buttonSize === "small" ? "py-[0.425rem] px-[1em]" : "py-[12px] px-[24px]"}
                        font-medium text-[18px] leading-6 tracking-[0.5px] cursor-pointer h-min hover:opacity-70 hover:scale-105 transition-all duration-125 ease-in-out`;

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
