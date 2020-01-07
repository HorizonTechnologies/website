import React, { Component } from "react";
import Review from "./review";
class Reviews extends Component {
  componentDidMount() {
    var slideIndex = 0;
    showSlides();
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("review-box");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";

      setTimeout(showSlides, 8000);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          name: "Rajesh",
          review:
            " I am happy that I have chosen the right path for my career and thank you co-learners for helping me in getting placed at a top notch company ",
          image: "logo.png",
          post: "MCom Student"
        },
        {
          name: "Yoga",
          review:
            " Good place to gain knowledge. Very knowledgeable faculty. Good infrastructure. Projects are also provided to gain real time knowledge about the subject. ",
          image: "logo.png",
          post: "BCom Student"
        },
        {
          name: "Lissy Jones",
          review:
            " Their teaching is really good. They made me feel comfortable and convenient to learn easily. I also registered their certificate in employment which will be helpful for me to join in government job. ",
          image: "logo.png",
          post: "Student"
        }
      ]
    };
  }
  render() {
    return (
      <div className="lightblue" id="reviews">
        <h1 className="main-heading"> What our users says</h1>
        <div className="our-ratings">
          <img src="google-rate-us.png" className="rate-us" />
          <p>
            Rated 4.8{" "}
            <i className="fa fa-star checked" style={{ color: "#ffed4b" }}></i>
            on Google Reviews
          </p>
        </div>
        <div id="review-container">
          {this.state.reviews.map((review, index) => (
            <Review data={review} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Reviews;
