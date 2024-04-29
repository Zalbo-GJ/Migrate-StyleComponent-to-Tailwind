import React from "react";

import { Icons, Cards } from "../../components";
import { homepage } from "../../utils/content";

const HeadContent = () => {
  const { thirdContent } = homepage;
  const { header3, subContents } = thirdContent;

  return (
    <div className="mt-[135px]">
      <h2 className=" text-[62px] leading-[64px] font-extrabold mb-12">
        {header3}
      </h2>
      {subContents.map(
        ({ header4, subHeader4, icons, inverse, messageCard }, i) => (
          <div key={`thirdContent${i}`}>
            <div
              className={` justify-between flex ${inverse ? " flex-row-reverse" : ""} items-center`}
            >
              <div className=" max-w-[530px] relative">
                <Cards.MessageCard {...messageCard} />
              </div>
              <div className=" max-w-[530px] relative">
                <div className=" text-[38px] leading-10 font-semibold mb-5">
                  {header4}
                </div>
                <div className=" text-[24px] leading-[38px] mb-6 font-normal">
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
            <br />
            <br />
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
