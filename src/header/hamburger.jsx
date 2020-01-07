import React, { Component } from "react";
const Hamburger = props => {
  if (props.visible === true)
    return (
      <div className="ham" onClick={props.click}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
    );
  else {
    return (
      <div className="ham" onClick={props.click}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    );
  }
};

export default Hamburger;
