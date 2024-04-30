import React from "react";
import PropTypes from "prop-types";

const MessageCard = ({ header, messages, color }) => {
  return (
    <div
      className={`md:w-[524px]  h-[300px] rounded-[32px] flex px-5 md:px-10 justify-center flex-col ${color === "cyan" && "bg-cyan"} ${color === "purple" && "bg-purplebg"}`}
    >
      <div className=" text-lagoonBlue font-medium text-lg md:text-[22px] md:leading-6 text-center mb-[37px] ">
        {header}
      </div>
      {messages.map(({ avatar, message, position }, i) => (
        <div
          key={`${i}-message-${color}`}
          className={` flex mb-6 ${position === "right" ? "flex-row-reverse" : ""}`}
        >
          <div className=" w-[46px] h-[46px]">
            {avatar && (
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full block overflow-hidden rounded-[23px]"
              />
            )}
          </div>
          <div
            className={`py-3 px-5 text-[20px] leading-[22px] rounded-[23px] mx-3 max-w-[300px] text-[#171A1FD8] ${
              color === "cyan" && position === "right"
                ? "bg-skyBlue text-white"
                : color === "purple" && position === "right"
                  ? "bg-purple text-white"
                  : position === "left"
                    ? "bg-white"
                    : ""
            }`}
          >
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
