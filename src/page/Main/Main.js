import React from "react";

import HeadContent from "./HeadContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";

import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <HeadContent />
      <SecondContent />
      <ThirdContent />
    </Container>
  );
};

export default Main;
