import "../src/Assets/css/bootstrap.css";
import "../src/Assets/css/styles.css";
import Alert from "./components/Alert/Alert";
import FifthSection from "./components/FifthSection/FifthSection";
import FirstSec from "./components/First-Section/FirstSec";
import Footer from "./components/Footer/Footer";
import FourthSection from "./components/FourthSection/FourthSection";
import Header from "./components/Header";
import SixSection from "./components/SixSection/SixSection";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
      <Header/>
        <Alert />
        <FirstSec />
        <FourthSection />
        <FifthSection />
        <SixSection />
        <Footer />
      </>
    );
  }
}

export default App;
