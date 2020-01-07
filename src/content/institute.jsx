import React, { Component } from "react";
const Institute = ({ data, data: { name, image } }) => {
  return (
    <div className="institute">
      <img src={`./institute-images/${image}`} />
      <p>{name}</p>
    </div>
  );
};

export default Institute;
