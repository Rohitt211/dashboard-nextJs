import React from "react";
import "./styles.scss";
import Image from "next/image";

const SpendingItem = ({ image, title, date }) => {
  return (
    <div className="card">
      <Image className="card-image" src={image} alt="image" />
      <div>
        <h4 className="card-heading">{title}</h4>
        <span className="card-date">{date}</span>
      </div>
    </div>
  );
};

export default SpendingItem;
