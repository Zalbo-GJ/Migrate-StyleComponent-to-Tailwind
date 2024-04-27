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

import { IconTag, IconTag2 } from "./styles";

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
  const IconTagSized = smaller ? IconTag2 : IconTag;
  return (
    <IconTagSized>
      <Icon {...iconProps} />
      {label}
    </IconTagSized>
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
