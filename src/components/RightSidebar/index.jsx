"use client";
import React from "react";
import "./style.scss";
import Heading from "../Heading";
import Box from "../Box";
import { spendingItems } from "@/constants";
import SpendingItem from "./SpendingItem";
import Image from "next/image";
import { kingTajIcon, rightArrow, threeDotsIcon } from "@/assets";

const ExpenseItem = ({ title, percentage, changesPoint }) => (
  <div className="rightExpense">
    <h4 className="rightExpense-rightMenuExpenseHeading">{title}</h4>
    <h4 className="rightExpense-rightMenuExpensePercentage">{percentage}</h4>
    <span className="rightExpense-rightMenuExpenseSpan">{changesPoint}</span>
  </div>
);

function RightSidebar() {
  return (
    <div className="rightMenu">
      <Box>
        <Heading title="Expenses and income" />
        <div className="rightMenu-rightMenuExpensesMiddle">
          <ExpenseItem title="Expense" percentage="75%" changesPoint="5.653" />
          <div className="rightMenu-rightMenuExpenseVs">
            <span>VS</span>
          </div>
          <ExpenseItem title="Income" percentage="40%" changesPoint="2.653" />
        </div>
        <div className="rightMenu-rightMenuExpensesBottom">
          <div className="rightMenu-rightMenuExpensesBottomLeft"></div>
          <div className="rightMenu-rightMenuExpensesBottomRight"></div>
        </div>
      </Box>
      <Box style={{ marginTop: 20 }}>
        <Image
          className="rightMenu-threeDotsIconStyle"
          src={threeDotsIcon}
          width={25}
          height={25}
          alt="image"
        />
        <Heading title="Latest Spending" />
        {spendingItems?.map((item, index) => {
          return <SpendingItem key={index} {...item} />;
        })}
        <div className="rightMenu-viewAllButtonBox">
          <button
            className="rightMenu-viewAllButton"
            onClick={() => {
              console.log("clicked on viewAllButton");
              alert("view all clicked");
            }}
          >
            View all
          </button>
          <Image src={rightArrow} height={12} width={15} alt="image" />
        </div>
      </Box>

      <Box style={{ marginTop: 20 }}>
        <Heading
          title="Go to premium"
          style={{ textAlign: "center", fontSize: 16 }}
        />
        <Image src={kingTajIcon} width={100} height={90} alt="image" />
        <Heading title="Need more feature?" style={{ marginBottom: 10 }} />
        <span className="rightMenu-lastSpan">
          Update your account to premium to get more features.
        </span>
        <button
          className="rightMenu-getNowButton"
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
