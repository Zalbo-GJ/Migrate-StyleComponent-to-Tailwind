import React from "react";
import PropTypes from "prop-types";

import { CustomPill, Card, Header, MessageContainer, Avatar } from "./styles";

const MessageCard = ({ header, messages, color }) => {
  return (
    <Card color={color}>
      <Header color={color}>{header}</Header>
      {messages.map(({ avatar, message, position }, i) => (
        <MessageContainer position={position} key={`${i}-message-${color}`}>
          <Avatar>{avatar && <img src={avatar} alt="avatar" />}</Avatar>
          <CustomPill color={color && position === "right" ? color : null}>
            {message}
          </CustomPill>
        </MessageContainer>
      ))}
    </Card>
  );
};

MessageCard.propTypes = {
  header: PropTypes.string,
  messages: PropTypes.array,
  color: PropTypes.oneOf(["cyan", "purple", ""]),
};

MessageCard.defaultProps = {
  header: "",
  messages: [],
  color: "",
};

export default MessageCard;
