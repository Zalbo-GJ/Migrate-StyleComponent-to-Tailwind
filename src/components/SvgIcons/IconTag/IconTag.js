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
  const IconTagClass = smaller ? "text-kashmir-blue" : "text-foreground-primary";
  const IconSizeClass = smaller ? "w-6 h-6" : "w-7 h-7";
  return (
    <div className={`font-medium text-base md:text-lg opacity-80 py-1 px-10 md:px-14 relative ${IconTagClass}`}>
      <Icon {...iconProps} className={`absolute top-0 left-0 ${IconSizeClass}`} />
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
