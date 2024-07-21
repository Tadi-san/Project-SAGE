"use client";

import Service from "../../components/Service";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ThirdSec from "../../components/ThirdSec";
import How from "../../components/How";
import Bottom from "../../components/Bottom";
import { AccordionDemo } from "../../components/Demo/AccordionDemo";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <ThirdSec />
      <How />

      <AccordionDemo />

      <Bottom />
    </>
  );
}

export default App;
