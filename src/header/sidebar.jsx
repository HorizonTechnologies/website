import React, { Component, Fragment } from "react";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      width: 0
    };
  }
  componentWillUpdate() {
    if (window.innerWidth > 768) this.props.click();
  }
  componentDidMount() {
    console.log("mounted");
    var x = document.getElementsByClassName("sidebar-items");
    for (let i = 0; i < x.length; i++) {
      x[i].addEventListener("click", () => {
        this.props.click();
      });
    }
    window.addEventListener("resize", () => {
      this.componentWillUpdate();
    });
  }

  render() {
    console.log("rendered");
    return (
      <Fragment>
        <div className="background-blur" onClick={this.props.click}></div>
        <div className="sidebar">
          <a className="sidebar-items" href="#journey">
            Our Journey
          </a>
          <a className="sidebar-items" href="#specialization">
            Specialization
          </a>
          <a className="sidebar-items" href="#mentors">
            Mentors
          </a>
          <a className="sidebar-items" href="#institutes">
            Our Work
          </a>
          <a className="sidebar-items" href="#reviews">
            Reviews
          </a>
          <a className="sidebar-items" href="#footer">
            Contact
          </a>
        </div>
      </Fragment>
    );
  }
}

export default SideBar;
