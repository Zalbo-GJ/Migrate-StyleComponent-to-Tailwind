import React from "react";

import HeadContent from "./HeadContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";

const Main = () => {
  return (
    <div className="max-w-[1200px] md:container-size w-[95%] mx-auto">
      <HeadContent />
      <SecondContent />
      <ThirdContent />
    </div>
  );
};

export default Main;
