import React, { Component, Fragment } from "react";
import Mentor from "./mentor";
const Mentors = () => {
  const mentors = [
    {
      name: "Patrick Galicia",
      about:
        "Patrick Galicia, currently works as Full Stack developer in San Francisco, USA. He holds a Bachelors degree from the University of Irvine, California. Experienced in web development and passionate about React. ",
      image: "patrick.jpg"
    },
    {
      name: "Varun Pathi",
      about:
        "Varun Pathi, a tech geek who is currently working as Data analytics coordinator at Augusta University. He holds a master degree in Business Analytics from University of Connecticut. He also worked for Bank of America where he helped build their voice assistant Erica.",
      image: "varun.jpg"
    },
    {
      name: "Madhan Kumar",
      about:
        "Madhan Kumar, an industry veteran in the field of Database and server management. He has 15+ years of real-time experience. Worked with multiple fortune 500 clients including Ford. His interests are in the field of Databases, Scripting, Networking and System administration. ",
      image: "madhan.jpg"
    }
  ];
  return (
    <Fragment>
      <div className="mentors-container" id="mentors">
        <h1 className="main-heading">Our Mentors</h1>
        {mentors.map((mentor, index) => (
          <Mentor data={mentor} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default Mentors;
