import React from "react";
import PropTypes from "prop-types";

const MessageCard = ({ header, messages, color }) => {
  const cardBgColor = color === "cyan" ? "bg-cyan-light" : color === "purple" ? "bg-purple-light" : "";
  const headerColor = color === "cyan" ? "text-sky-blue" : color === "purple" ? "text-purple" : "text-lagoon-blue";
  const pillBgColor = color === "cyan" ? "bg-sky-blue" : color === "purple" ? "bg-purple" : "";
  const pillTextColor = "text-white";

  return (
    <div className={`w-[524px] md:w-96 h-64 rounded-3xl flex flex-col justify-center items-center p-10 ${cardBgColor}`}>
      <h2 className={`font-medium text-lg md:text-xl text-center mb-6 ${headerColor}`}>{header}</h2>
      {messages.map(({ avatar, message, position }, i) => (
        <div key={`${i}-message-${color}`} className={`flex items-center justify-${position === "right" ? "end" : "start"} mb-4`}>
          {avatar && <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full border border-gray-300 mr-4" />}
          <div className={`p-2 rounded-xl ${pillBgColor} ${pillTextColor}`}>
            {message}
          </div>
        </div>
      ))}
    </div>
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
