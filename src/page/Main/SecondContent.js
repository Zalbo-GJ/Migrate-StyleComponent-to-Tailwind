import React from "react";

import { Icons } from "../../components";
import { HomeScreen } from "../../assets";
import { homepage } from "../../utils/content";
import {
  ColoredCard,
  Header2,
  SubHeader2,
  ImageContainer,
  IconsContainer,
} from "./styles";

const SecondContent = () => {
  const { secondContent } = homepage;

  return (
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
  );
};

export default SecondContent;
