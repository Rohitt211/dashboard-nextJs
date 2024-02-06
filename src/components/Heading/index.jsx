import React from "react";
import "./styles.scss";

const Heading = ({ title, style }) => {
  return (
    <h2 style={style} className="heading">
      {title}
    </h2>
  );
};

export default Heading;
