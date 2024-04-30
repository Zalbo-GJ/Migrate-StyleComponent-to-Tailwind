import React from "react";

import { Icons } from "../../components";
import { HomeScreen } from "../../assets";
import { homepage } from "../../utils/content";

const SecondContent = () => {
  const { secondContent } = homepage;

  return (
    <div className=" mt-[70px]  max-h-[956px] lg:w-full pt-[48px] pb-[50px] bg-lighterBlue rounded-[44px]">
      <div className=" font-extrabold text-[40px] md:text-[54px] md:leading-[64px] mb-1 text-center text-black">
        {secondContent.header2}
      </div>
      <div className=" text-[20px] md:text-[26px] md:leading-[46px] text-midLightGray mb-7 text-center">
        {secondContent.subHeader2}
      </div>
      <img
        className="max-w-[90%] lg:max-w-[928px] w-full rounded-[20px] mb-[26px] second-content-image overflow-hidden mx-auto"
        src={HomeScreen}
        alt="Home"
      />
      <div className="second-content-icon flex justify-center pt-6 md:pl-[38px] pb-[38]">
        {secondContent.icons1.map((props, i) => (
          <Icons.IconTag {...props} key={`secondContent-${i}-icon`} />
        ))}
      </div>
      <div className="second-content-icon flex justify-center pt-6 md:pl-[38px] pb-[38]">
        {secondContent.icons2.map((props, i) => (
          <Icons.IconTag {...props} key={`secondContent-${i}-icon2`} />
        ))}
      </div>
    </div>
  );
};

export default SecondContent;
