import React from "react";
import styles from "./styles.module.css";

const Box = ({ children, style }) => {
  return (
    <div style={style} className={styles.box}>
      {children}
    </div>
  );
};

export default Box;
