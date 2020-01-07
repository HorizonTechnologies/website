import React, { Component } from "react";
const Mentor = ({ data, data: { name, about, image } }) => {
  return (
    <div className="mentor-box">
      <div className="mentor-img-box">
        <img src={`./mentor-images/${image}`} className="mentor-image" />
      </div>
      <div className="mentor-name">{name}</div>
      <div className="about-mentor">{about}</div>
    </div>
  );
};

export default Mentor;
