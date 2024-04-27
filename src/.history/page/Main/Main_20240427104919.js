import React from "react";

import HeadContent from "./HeadContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";
import { HomeIntroScreen1, HomeIntroScreen2,HomeScreen } from "../../assets";
import { homepage } from "../../utils/content";
import { Icons, Cards } from "../../components";



import { Container } from "./styles";
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
import {
  ColoredCard,
  Header2,
  SubHeader2,
  ImageContainer,
  IconsContainer,
} from "./styles";

import {
  ThirdContainer,
  Header3,
  Header4,
  SubHeader4,
} from "./styles";
const Main = () => {
  const { secondContent } = homepage;
  const { thirdContent } = homepage;
  const { header3, subContents } = thirdContent;
  return (
    <Container>
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
    <ColoredCard>
      <Header2>{secondContent.header2}</Header2>
      <SubHeader2>{secondContent.subHeader2}</SubHeader2>
      <ImageContainer src={HomeScreen} alt="Home screen image" />
      <IconsContainer>
        {secondContent.icons1.map((props, i) => (
          <Icons.IconTag {...props} key={`secondContent-${i}-icon`} />
        ))}
      </IconsContainer>
      <IconsContainer>
        {secondContent.icons2.map((props, i) => (
          <Icons.IconTag {...props} key={`secondContent-${i}-icon2`} />
        ))}
      </IconsContainer>
    </ColoredCard>
    <ThirdContainer>
      <Header3>{header3}</Header3>
      {subContents.map(
        ({ header4, subHeader4, icons, inverse, messageCard }, i) => (
          <div key={`thirdContent${i}`}>
            <FlexContent
              flexDirection={inverse ? "row-reverse" : "initial"}
              alignItems="center"
            >
              <Content>
                <Cards.MessageCard {...messageCard} />
              </Content>
              <Content>
                <Header4>{header4}</Header4>
                <SubHeader4>{subHeader4}</SubHeader4>
                {icons.map((props, i) => (
                  <Icons.IconTag
                    {...props}
                    key={`secondContent-${i}-icon`}
                    smaller
                  />
                ))}
              </Content>
            </FlexContent>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      )}
    </ThirdContainer>
    </Container>
  );
};

export default Main;
