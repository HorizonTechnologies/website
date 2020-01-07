import React, { Component, Fragment } from "react";
const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-heading">
            Your dream software job starts here{" "}
          </h1>

          <p className="banner-text">
            Our students don’t create projects, they build companies. We help
            students to gain real time knowledge required to either find a job
            in Fortune companies or create their own startup. Our mentors who
            are industry veterans provide 1:1 help.
          </p>
          <a href="https://wa.me/14797998636?text=I'm%20interested%20in%20joining%20Horizon%20Technologies>">
            <button className="banner-btn">
              <i className="fa fa-whatsapp"></i>CHAT WITH US
            </button>
          </a>
        </div>
        <img src="topwave.png" className="topwave" />
      </div>
    </Fragment>
  );
};

export default Banner;
