import React from "react";
import styles from "./styles.module.css";

const Heading = ({ title, style }) => {
  return (
    <h2 style={style} className={styles.heading}>
      {title}
    </h2>
  );
};

export default Heading;
