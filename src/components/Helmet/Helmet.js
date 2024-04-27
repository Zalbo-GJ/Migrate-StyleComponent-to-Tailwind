import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import { Logo } from "../../assets/icons";

const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
        crossorigin="anonymous"
      />
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
