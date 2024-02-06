import React from "react";
import "./styles.scss";

const Box = ({ children, style }) => {
  return (
    <div style={style} className="box">
      {children}
    </div>
  );
};

export default Box;
