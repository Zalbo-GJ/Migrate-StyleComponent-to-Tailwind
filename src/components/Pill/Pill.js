import React from "react";

import { PillComponent } from "./styles";

const Pill = ({ children, ...props }) => (
  <PillComponent {...props}>{children}</PillComponent>
);

export default Pill;
