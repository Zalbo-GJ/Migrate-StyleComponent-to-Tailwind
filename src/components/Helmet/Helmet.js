import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import { Logo } from "../../assets/icons";

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <title>{title}</title>
      <link rel="icon" href={Logo} />
    </Helmet>
  );
};
HelmetComponent.propTypes = {
  title: PropTypes.string,
};

HelmetComponent.defaultProps = {
  title: "",
};

export default HelmetComponent;
