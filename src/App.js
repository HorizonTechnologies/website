import React, { Fragment } from "react";
import Navbar from "./header/navbar";
import Banner from "./header/banner";
import Works from "./content/works";
import "./App.css";
import Mentors from "./content/mentors";
import Reviews from "./content/reviews";
import Footer from "./footer/footer";
import Institutes from "./content/institutes";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Works />
      <Institutes />
      <Mentors />
      <Reviews />
      <Footer id="footer" />
    </Fragment>
  );
}

export default App;
