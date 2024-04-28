import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./page/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Main from "./page/Main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactUs />
    <Main />
    <Footer/>
    
    </div>
  );
}

export default App;
