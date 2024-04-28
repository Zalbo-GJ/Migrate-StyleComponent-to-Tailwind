import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UnAuthenticatedRoute } from "./route";
// import { Main, TermsOfService, PrivacyPolicy, ContactUs } from "./page";
import { Layout, Footer, Helmet, InnerLayout, Navbar } from "./components";
// import { ThemeContext } from "./context";
import { Main, ContactUs } from "./page";

import { title } from "./utils/content";
import { light } from "./utils/colors";
import "./index.css";
import TermsOfService from "./page/TermsOfService/TermsOfService";
import PrivacyPolicy from "./page/PrivacyPolicy/PrivacyPolicy";

const initialTheme = localStorage.getItem("theme") || "light";

const App = () => {
  // const [theme, setTheme] = useState(initialTheme);
  // const [themeColors] = useState({ light });

  // const changeTheme = (value) => {
  //   setTheme(value);
  //   localStorage.setItem("theme", value);
  // };

  return (
    // <ThemeContext.Provider
    //   value={{
    //     theme,
    //     themeColors,
    //     setTheme: changeTheme,
    //     getColor: (type) => themeColors[theme][type],
    //   }}
    // >
    <Router>
      <Helmet title={title} />
      <Layout>
        <Navbar />
        <InnerLayout>
          <Switch>
            <Route path="/terms-of-service" component={TermsOfService} exact />
            <Route path="/privacy-policy" component={PrivacyPolicy} exact />
            <Route path="/contact-us" component={ContactUs} exact />
            <UnAuthenticatedRoute path="/" component={Main} exact />
          </Switch>
        </InnerLayout>
        <Footer />
      </Layout>
    </Router>
    // </ThemeContext.Provider>
  );
};

export default App;
