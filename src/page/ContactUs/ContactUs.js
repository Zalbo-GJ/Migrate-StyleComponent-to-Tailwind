import { contactUs } from "../../utils/content";

const ContactUs = () => {
  return (
    <div className=" max-w-[800px] w-[90%]  flex flex-col box-border border border-lightGray p-20 lg:my-40 shadow-[0_4px_8px_0_#EBEBEB] rounded-md mx-auto text-darkGray  ">
      <div className=" my-[5px] font-bold text-[1.5em]">{contactUs.header}</div>
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
