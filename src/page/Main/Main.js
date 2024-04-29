import React from "react";

import HeadContent from "./HeadContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";

const Main = () => {
  return (
    <div className="max-w-[1200px] container-size mx-auto">
      <HeadContent />
      <SecondContent />
      <ThirdContent />
    </div>
  );
};

export default Main;
