import { contactUs } from "../../utils/content";

const ContactUs = () => {
  return (
    <div className=" contain ">
      <div className=" my-1 font-bold text-[1.5em]">{contactUs.header}</div>
      {contactUs.information.map(({ header, content, type }, i) => (
        <div key={`info${i}`}>
          <div className=" font-semibold text-[0.83em] my-[1.67em]">
            {header}
          </div>
          {type === "email" ? (
            <div className=" text-primary">{content}</div>
          ) : (
            <div>{content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ContactUs;
