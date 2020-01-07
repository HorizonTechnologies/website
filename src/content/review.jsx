import React, { Component } from "react";
const Review = ({ data, data: { name, image, review, post } }) => {
  return (
    <div className="review-box">
      <div className="reviewer-image-box">
        <img src={`./user-images/${image}`} className="reviewer-image" />
      </div>

      <div className="clip-two">
        <div className="review">{review}</div>
      </div>
      <div className="reviewer-info">
        <h3>{name}</h3>
        <p>{post}</p>
      </div>
    </div>
  );
};
export default Review;
