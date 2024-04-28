import React from "react";

import HeadContent from "./HeadContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";


const Main = () => {
  return (
    <div>
      <div className="max-w-1200px mx-auto md:mx-75px " >
        <HeadContent />
        <SecondContent />
        <ThirdContent />
      </div>
    </div>
  );
};

export default Main;
