import React from "react";

import { HomeIntroScreen1, HomeIntroScreen2 } from "../../assets";
import { homepage } from "../../utils/content";

const HeadContent = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[530px] relative">
        <div className=" font-extrabold text-[88px] leading-[91px] my-4 text-black mt-16">
          {homepage.headers.first.part1}
          <span className=" color-change"> {homepage.headers.first.part2}</span>
        </div>
        <div className=" text-[30px] leading-[46px] text-midLightGray mb-11">
          {homepage.subHeaders.first.part1}
          <br />
          {homepage.subHeaders.first.part2}
        </div>
        <div className=" flex justify-normal ">
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
                className=" logo-container bg-black h-14 mr-6 cursor-pointer rounded-[10px]"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[530px] relative">
        <div className="w-[527px] h-[527px] heading-circle  rounded-full"></div>
        <img
          src={HomeIntroScreen2}
          alt="Mobile chat screen 2"
          className="w-[227px] h-[493px] absolute top-[18px] left-[206px] rounded-[19px] overflow-hidden circle-image-2 "
        />
        <img
          src={HomeIntroScreen1}
          alt="Mobile chat screen 1"
          className="w-[270px] h-[585px] absolute top-[-29px] left-[92px] rounded-[23px] circle-image-1 overflow-hidden"
        />
      </div>
    </div>
  );
};

export default HeadContent;
