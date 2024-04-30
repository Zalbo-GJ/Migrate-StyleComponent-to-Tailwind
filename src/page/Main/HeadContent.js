import React from "react";

import { HomeIntroScreen1, HomeIntroScreen2 } from "../../assets";
import { homepage } from "../../utils/content";

const HeadContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center lg:flex-row  text-center md:text-left lg:justify-between h-full">
      <div className="max-w-[530px] mb-12 md:mb-0 relative">
        <div className=" font-extrabold text-[60px]  md:text-[88px] md:leading-[91px] my-4 text-black md:mt-16">
          {homepage.headers.first.part1}
          <br />
          <span className=" color-change"> {homepage.headers.first.part2}</span>
        </div>
        <div className=" text-[25px] text-pretty md:text-[30px] md:leading-[46px] text-midLightGray mb-11">
          {homepage.subHeaders.first.part1}
          <br />
          {homepage.subHeaders.first.part2}
        </div>
        <div className=" flex justify-evenly lg:justify-normal ">
          {homepage.outerImgLinks.map(({ href, text, icon }, i) => (
            <a
              rel="noopener noreferrer"
              href={href}
              target="_blank"
              key={`outerLink${i}`}
            >
              <img
                src={icon}
                alt={text}
                className=" logo-container bg-black h-10 md:h-14 md:mr-6 cursor-pointer rounded-[10px]"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[530px] h-[600px] relative md:mt-12 lg:mt-0 ">
        <div className="md:w-[527px] w-80 md:h-[527px] heading-circle  rounded-full"></div>
        <img
          src={HomeIntroScreen2}
          alt="Mobile chat screen 2"
          className="md:w-[227px] md:h-[493px] w-72 absolute top-4 left-[60px] md:top-[18px] md:left-[206px] rounded-[19px] overflow-hidden circle-image-2 "
        />
        <img
          src={HomeIntroScreen1}
          alt="Mobile chat screen 1"
          className="md:w-[270px] w-72 md:h-[585px] absolute top--8 left-[10px] md:top-[-29px]  md:left-[92px] rounded-[23px] circle-image-1 overflow-hidden"
        />
      </div>
    </div>
  );
};

export default HeadContent;
