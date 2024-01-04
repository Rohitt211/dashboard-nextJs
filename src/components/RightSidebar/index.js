"use client";
import React from "react";
import styles from "./style.module.css";
import Heading from "../Heading";
import Box from "../Box";
import { spendingItems } from "@/constants";
import SpendingItem from "./SpendingItem";
import Image from "next/image";
import { kingTajIcon, rightArrow, threeDotsIcon } from "@/assets";

const ExpenseItem = ({ title, percentage, changesPoint }) => (
  <div>
    <h4 className={styles.rightMenuExpenseHeading}>{title}</h4>
    <h4 className={styles.rightMenuExpensePercentage}>{percentage}</h4>
    <span className={styles.rightMenuExpenseSpan}>{changesPoint}</span>
  </div>
);

function RightSidebar() {
  return (
    <div className={styles.rightMenu}>
      <Box>
        <Heading title="Expenses and income" />
        <div className={styles.rightMenuExpensesMiddle}>
          <ExpenseItem title="Expense" percentage="75%" changesPoint="5.653" />
          <div className={styles.rightMenuExpenseVs}>
            <span>VS</span>
          </div>
          <ExpenseItem title="Income" percentage="40%" changesPoint="2.653" />
        </div>
        <div className={styles.rightMenuExpensesBottom}>
          <div className={styles.rightMenuExpensesBottomLeft}></div>
          <div className={styles.rightMenuExpensesBottomRight}></div>
        </div>
      </Box>

      <Box style={{ marginTop: 20 }}>
        <Image
          className={styles.threeDotsIconStyle}
          src={threeDotsIcon}
          width={25}
          height={25}
          alt="image"
        />
        <Heading title="Latest Spending" />
        {spendingItems?.map((item,index) => {
          return <SpendingItem key={index} {...item} />;
        })}
        <div className={styles.viewAllButtonBox}>
          <button className={styles.viewAllButton} onClick={()=> {
            console.log("clicked on viewAllButton");
            alert("view all clicked");
          }}>View all</button>
          <Image src={rightArrow} height={12} width={15} alt="image" />
        </div>
      </Box>

      <Box style={{ marginTop: 20 }}>
        <Heading
          title="Go to preium"
          style={{ textAlign: "center", fontSize: 16 }}
        />
        <Image src={kingTajIcon} width={100} height={90} alt="image"/>
        <Heading title="Need more feature?" style={{ marginBottom: 10 }} />
        <span className={styles.lastSpan}>
          Update your account to premium to get more features.
        </span>
        <button
          className={styles.getNowButton}
          onClick={() => {
            console.log("clicked on get now");
            alert("get now");
          }}
        >
          Get now
        </button>
      </Box>
    </div>
  );
}

export default RightSidebar;
