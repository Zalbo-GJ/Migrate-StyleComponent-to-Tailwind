import React from "react";

import { HomeIntroScreen1, HomeIntroScreen2 } from "../../assets";
import { homepage } from "../../utils/content";
import {
  FlexContent,
  Content,
  Header1,
  SubHeader1,
  LogoContainer,
  Circle,
  CircleImage1,
  CircleImage2,
} from "./styles";

const HeadContent = () => {
  return (
    <FlexContent>
      <Content key="content1">
        <Header1>
          {homepage.headers.first.part1}
          <span> {homepage.headers.first.part2}</span>
        </Header1>
        <SubHeader1>
          {homepage.subHeaders.first.part1}
          <br />
          {homepage.subHeaders.first.part2}
        </SubHeader1>
        <FlexContent justifyContent="normal">
          {homepage.outerImgLinks.map(({ href, text, icon }, i) => (
            <a
              rel="noopener noreferrer"
              href={href}
              target="_blank"
              key={`outerLink${i}`}
            >
              <LogoContainer src={icon} alt={text} />
            </a>
          ))}
        </FlexContent>
      </Content>
      <Content key="content2">
        <Circle />
        <CircleImage2 src={HomeIntroScreen2} alt="Mobile chat screen 2" />
        <CircleImage1 src={HomeIntroScreen1} alt="Mobile chat screen 1" />
      </Content>
    </FlexContent>
  );
};

export default HeadContent;
