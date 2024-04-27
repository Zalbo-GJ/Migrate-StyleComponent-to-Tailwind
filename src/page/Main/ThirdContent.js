import React from "react";

import { Icons, Cards } from "../../components";

import { homepage } from "../../utils/content";

import {
  FlexContent,
  Content,
  ThirdContainer,
  Header3,
  Header4,
  SubHeader4,
} from "./styles";

const HeadContent = () => {
  const { thirdContent } = homepage;
  const { header3, subContents } = thirdContent;

  return (
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
  );
};

export default HeadContent;
