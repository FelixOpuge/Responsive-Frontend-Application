import React from "react";
import {
  Blog,
  Possibility,
  Features,
  Footer,
  Header,
  WhatGPT3,
} from "./containers/index";
import "./App.css";

import { CTA, Brand, Navbar } from "./components/index";

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />

        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
