import React from "react";
import left from "../assets/bxs-quote-alt-left.png";
import Right from "../assets/bxs-quote-alt-right.png";

export const Customerreview = ({ item }) => {
  return (
    <div className="review-comp">
      <div className="text-box">
        <div className="text">
          <img src={left} style={{ display: "inline-block" }} /> {item.review}{" "}
          <img src={Right} style={{ display: "inline-block" }} />
        </div>
        <img
          src={item.img}
          className="profile-img"
          width="70px"
          height="70px"
        />
      </div>
      <div className="profile-details">
        <p className="name">{item.name}</p>
        <p className="role">{item.role}</p>
        <p className="role">{item.country}</p>
      </div>
    </div>
  );
};
export default Customerreview;
