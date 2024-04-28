import React from "react";

import { HomeIntroScreen1, HomeIntroScreen2 } from "../../assets";
import { homepage } from "../../utils/content";

const HeadContent = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[530px] relative" key="content1">
        <div className="font-semibold text-8xl leading-6 md:text-7xl md:leading-8 mb-4 text-black mt-16">
          {homepage.headers.first.part1}
          <span> {homepage.headers.first.part2}</span>
        </div>
        <div className="text-xl leading-7 text-midLightGray mb-11">
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
                className="h-14 mr-6 cursor-pointer bg-black transition duration-150 ease-in-out rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[530px] relative" key="content2">
        <div className="w-[527px] h-[527px] bg-gradient-to-br from-yellow-300 to-red-500 rounded-full"></div>
        <img
          src={HomeIntroScreen2}
          alt="Mobile chat screen 2"
          className="w-[227px] h-[ 493px] absolute top-[18px] left-[206px] rounded-lg shadow-lg"
        />
        <img
          src={HomeIntroScreen1}
          alt="Mobile chat screen 1"
          className="w-[270px] h-[585px] absolute top-[29px] left-[92px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeadContent;
