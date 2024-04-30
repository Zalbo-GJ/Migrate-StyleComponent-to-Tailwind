import React from "react";

import { Icons, Cards } from "../../components";
import { homepage } from "../../utils/content";

const HeadContent = () => {
  const { thirdContent } = homepage;
  const { header3, subContents } = thirdContent;

  return (
    <div className="md:mt-[135px] mt-10">
      <h2 className=" text-5xl text-center lg:text-left md:text-[62px] leading-[64px] font-extrabold mb-8 md:mb-12">
        {header3}
      </h2>
      {subContents.map(
        ({ header4, subHeader4, icons, inverse, messageCard }, i) => (
          <div key={`thirdContent${i}`}>
            <div
              className={` justify-between  lg:text-left flex flex-col-reverse lg:flex-row ${inverse ? " lg:flex-row-reverse" : ""} items-center`}
            >
              <div className="max-w-[530px] w-full lg:w-auto relative">
                <Cards.MessageCard {...messageCard} />
              </div>
              <div className=" max-w-[530px] relative mb-6 md:mb-8 lg:mb-0">
                <div className=" text-center md:text-left text-3xl md:text-[38px] md:leading-10 font-semibold mb-5">
                  {header4}
                </div>
                <div className=" text-xl text-center md:text-left md:text-[24px] md:leading-[38px] mb-6 font-normal">
                  {subHeader4}
                </div>

                {icons.map((props, i) => (
                  <Icons.IconTag
                    {...props}
                    key={`secondContent-${i}-icon`}
                    smaller
                  />
                ))}
              </div>
            </div>
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            <br />
            <br />
            <br />
          </div>
        ),
      )}
    </div>
  );
};

export default HeadContent;
