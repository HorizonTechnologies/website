import React, { Component, Fragment } from "react";
import Institute from "./institute";
const Institutes = () => {
  const institutes = [
    {
      name: "St.Joseph College Trichy",
      image: "st-joseph.jpg"
    },
    {
      name: "Jamal Mohammad College",
      image: "jamal.jpg"
    },
    {
      name: "Holy Cross College",
      image: "holy-cross.jpg"
    }
  ];
  return (
    <div className="lightblue" id="institutes">
      <h2 className="main-heading">Institutions that we have worked with </h2>
      <div className="institute-container">
        {institutes.map((institute, index) => (
          <Institute data={institute} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Institutes;
