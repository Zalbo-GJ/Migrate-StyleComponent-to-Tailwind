import React from "react";

import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import { Container } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <LeftContainer />
      <RightContainer />
    </Container>
  );
};

export default Navbar;
