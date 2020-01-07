import React, { Component, Fragment } from "react";
import Work from "./work";
const Works = () => {
  const ourWork = [
    {
      name: "Web and App Development",
      image: "web-dev.jpg"
    },
    {
      name: "Database Management",
      image: "database.jpg"
    },
    {
      name: "Cloud Computing",
      image: "cloud-computing.jpg"
    },
    {
      name: "Big Data",
      image: "big-data.jpg"
    },
    {
      name: "Testing and Automation",
      image: "testing-and-automation.png"
    },
    {
      name: "Distributed Systems",
      image: "distributed-systems.jpg"
    }
  ];
  return (
    <div className="lightblue" id="journey">
      <h1 className="main-heading">Why Horizon ?</h1>

      <div className="story">
        <h2 className="main-heading">Our Journey</h2>
        <p>
          We started as a software training organization in 2012. We are one of
          the pioneers of the training industry in Trichy. We have trained 7000+
          students from premium institutions like NIT Trichy, PSG Tech &amp;
          SASTRA University. Our alumni work in companies such as Microsoft, TCS
          &amp; Cognizant. We also conduct training programs regularly in
          colleges in and around Trichy.
        </p>
      </div>
      <div className="work-container" id="specialization">
        <h2 className="main-heading">Our Specialization </h2>
        {ourWork.map((work, index) => (
          <Work data={work} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Works;
