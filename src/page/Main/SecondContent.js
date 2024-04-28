import React from "react";

import { Icons } from "../../components";
import { HomeScreen } from "../../assets";
import { homepage } from "../../utils/content";

const SecondContent = () => {
  const { secondContent } = homepage;

  return (
    <div className="mt-70px h-956px w-full py-48px bg-lighter-blue rounded-44px">
      <h2 className="font-bold text-2xl md:text-4xl text-center mb-4">{secondContent.header2}</h2>
      <p className="text-lg md:text-xl text-center mb-8">{secondContent.subHeader2}</p>
      <img src={HomeScreen} alt="Home screen image" className="max-w-928px h-auto mx-auto mb-26px rounded-20px shadow-img overflow-hidden" />
      <div className="flex justify-center">
        <IconsContainer icons={secondContent.icons1} />
      </div>
      <div className="flex justify-center">
        <IconsContainer icons={secondContent.icons2} />
      </div>
    </div>
  );
};

const IconsContainer = ({ icons }) => (
  <>
    {icons.map((props, i) => (
      <Icons.IconTag {...props} key={`secondContent-${i}-icon`} />
    ))}
  </>
);

export default SecondContent;
