import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const SpendingItem = ({ image, title, date }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} width={20} height={20} />
      <div>
        <h4 className={styles.heading}>{title}</h4>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default SpendingItem;
