import React, { Component, Fragment } from "react";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer" id="footer">
        <img src="bottomwave.png" className="bottomwave" />
        <div className="footer-box">
          <div className="footer-col">
            <img src="logo.png" />
            <h2>Horizon Technologies</h2>
            <p>
              <i className="fa fa-globe"></i>
              <a href="https://horizontec.in">horizontec.in</a>
            </p>
          </div>
          <div className="footer-col">
            <h2>Locate Us</h2>
            <i className="fa fa-map-marker"></i>
            <h4>Head Office</h4>
            <p>#75, 1st Floor, North Andar Street, Trichy.2, Tamilnadu</p>
            <p>
              <i className="fa fa-phone"></i>0431 4210591
            </p>
          </div>
          <div className="footer-col">
            <h2>Follow Us</h2>
            <a href="https://m.facebook.com/Horizon-Technologies-253032891444786/">
              Facebook
            </a>
            <a href="https://www.instagram.com/horizon_technologies/">
              Instagram
            </a>
            <a href="mailto:horizontechtrichy@gmail.com">Gmail</a>
            <a href="https://github.com/HorizonTechnologies">Github</a>
            <a href="https://twitter.com/horizontry2018">Twitter</a>
            <a href="https://www.linkedin.com/in/horizon-tech-093910161/">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="copyright">
          &copy; Copyright Horizon Technologies 2020
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
