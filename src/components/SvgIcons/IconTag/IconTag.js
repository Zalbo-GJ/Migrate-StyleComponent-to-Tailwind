import React from "react";
import PropTypes from "prop-types";

import {
  PeopleIcon,
  MessageIcon,
  MailIcon,
  PenIcon,
  VideoIcon,
  LabelIcon,
  CompassIcon,
  WalletIcon,
  RobotIcon,
  ColorIcon,
} from "../";

const iconsMap = {
  message: MessageIcon,
  video: VideoIcon,
  people: PeopleIcon,
  label: LabelIcon,
  compass: CompassIcon,
  wallet: WalletIcon,
  robot: RobotIcon,
  color: ColorIcon,
  mail: MailIcon,
  pen: PenIcon,
};

const IconTagComponent = ({ icon, label, iconProps, smaller }) => {
  const Icon = iconsMap[icon];
  const IconTagClass = smaller
    ? "font-normal text-[18px] leading-7 opacity-80 pr-10 pl-9 relative text-kashmirBlue icons-css-2  "
    : "flex font-medium icons-css text-[18px] leading-7 opacity-80 pr-10 pl-9 relative text-foregroundPrimary justify-center items-center";

  return (
    <div className={`  ${IconTagClass}`}>
      <Icon {...iconProps} />
      {label}
    </div>
  );
};

IconTagComponent.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  iconProps: PropTypes.object,
  smaller: PropTypes.bool,
};

IconTagComponent.defaultProps = {
  icon: "message",
  label: "",
  iconProps: {},
  smaller: false,
};

export default IconTagComponent;
