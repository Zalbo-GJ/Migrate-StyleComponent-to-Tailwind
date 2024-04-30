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
    ? "font-normal mb-2 md:mb-0 mx-5 md:mx-0 h-[20px] md:h-[28px] md:text-[18px] md:leading-7 opacity-80 md:pr-10 md:pl-9 pl-7 pr-2 relative text-kashmirBlue icons-css-2  "
    : "flex h-[28px] font-medium icons-css text-[12px] md:text-[18px] md:leading-7 opacity-80 md:pr-10 md:pl-9 pl-7 pr-2 relative text-foregroundPrimary items-center";

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
