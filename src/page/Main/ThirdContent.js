import React from "react";

import { Icons, Cards  } from "../../components";
import { homepage } from "../../utils/content";

const HeadContent = () => {
  const { thirdContent } = homepage;
  const { header3, subContents } = thirdContent;

  return (
    <div className="mt-24">
      <h2 className="font-semibold text-4xl md:text-5xl mb-8">{header3}</h2>
      {subContents.map(({ header4, subHeader4, icons, inverse, messageCard }, i) => (
        <div
          key={`thirdContent${i}`}
          className={`flex flex-col md:flex-row ${inverse ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
        >
          <div className="md:mr-8">
            <Cards.MessageCard {...messageCard} />
          </div>
          <div className="md:ml-8">
            <h3 className="font-semibold text-3xl md:text-4xl mb-4">{header4}</h3>
            <p className="text-lg md:text-xl mb-4">{subHeader4}</p>
            <div className="flex flex-wrap">
              {icons.map((props, i) => (
                <Icons.IconTag {...props} key={`secondContent-${i}-icon`} smaller />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeadContent;
