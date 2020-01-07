import React, { Component } from "react";
const Work = ({ data, data: { name, image } }) => {
  // Nested Array Destructuring
  return (
    <div className="work">
      <img src={`./work-images/${image}`} />
      <p>{name}</p>
    </div>
  );
};

export default Work;
