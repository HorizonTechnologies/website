import React, { Component, Fragment } from "react";
import SideBar from "./sidebar";
import Hamburger from "./hamburger";
class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  handleClick = () => {
    this.state.visible === true
      ? this.handleClose()
      : this.setState({
          visible: true
        });
  };
  handleClose = () => {
    document.getElementsByTagName("body")[0].style.position = "relative";
    this.setState({ visible: false });
  };

  render() {
    let sidebar;
    if (this.state.visible === true) {
      sidebar = <SideBar click={this.handleClose} />;
    }

    return (
      <Fragment>
        {sidebar}
        <div className="nav">
          <div className="logo-box">
            <img src="logo.png" className="logo" />
            <p> Horizon</p>
          </div>
          <Hamburger click={this.handleClick} visible={this.state.visible} />
          <div className="menu">
            <div className="menuitems">
              Why
              <div className="collapse">
                <a className="subitems" href="#journey">
                  Our Journey
                </a>
                <a className="subitems" href="#specialization">
                  Specialization
                </a>
                <a className="subitems" href="#mentors">
                  Mentors
                </a>
                <a className="subitems" href="#institutes">
                  Our Work
                </a>
                <a className="subitems" href="#reviews">
                  Reviews
                </a>
                <a className="subitems" href="#footer">
                  Contact
                </a>
              </div>
            </div>
            <div className="menuitems " href="#">
              Track
              <div className="collapse">
                <a className="subitems">Python</a>
                <a className="subitems">Javascript</a>
                <a className="subitems">Tally</a>
              </div>
            </div>
            <div className="menuitems">
              <a href="https://wa.me/14797998636?text=I'm%20interested%20in%20joining%20Horizon%20Technologies>">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default nav;
