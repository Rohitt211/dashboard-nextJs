"use client";
import React, { useState } from "react";
import Style from "./styles.module.css";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { lastTransactionList } from "@/constants";
import Image from "next/image";
import { avatarIcon, threeDotsIcon } from "@/assets";
import { DOUGHNUT_CHART_DATA } from "@/constants/chartConstants";
Chart.register(ArcElement);

function Footer() {
  const [listItem, setListItem] = useState(lastTransactionList);

  const handleFilter = (type) => {
    console.log("handleFilter');", type);
    const filteredList = lastTransactionList.filter(item => item.status === type);
    setListItem(filteredList);
  };

  return (
    <div className={Style.footer_container}>
      <div
        className={`${Style.single_container_first} ${Style.newOldContainer}`}
      >
        {listItem.map((element, index) =>
          index == 0 ? (
            <SingleUserHeader handleFilter={handleFilter} />
          ) : (
            <SingleUserItem name={element.name} price={element.price} />
          )
        )}
      </div>
      <div className={Style.item_eight_first}>
        <div className={Style.item_nine_first}>
          <span>Analytics</span>
          <span>
            <Image src={threeDotsIcon} width={20} height={20} />
          </span>
        </div>
        <div className={Style.item_ten_first} style={{ height: "200px" }}>
          <Doughnut data={DOUGHNUT_CHART_DATA.data} />
        </div>
        <div className={Style.item_eleven_first}>
          {DOUGHNUT_CHART_DATA.status.map((element) => {
            return (
              <StatusIndicator name={element.name} color={element.color} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatusIndicator({ name, color }) {
  return (
    <div className={Style.item_twelth_first}>
      <div
        className={Style.item_thirteen_first}
        style={{
          background: color,
        }}
      ></div>
      {name}
    </div>
  );
}

function SingleUserItem({ name, price }) {
  return (
    <div className={Style.item_fourth_first}>
      <div className={Style.item_fifth_first}>
        <Image src={avatarIcon} className={Style.item_sixth_first} />
        <span>{name}</span>
      </div>
      <div className={Style.item_seventh_first}>
        <span>{price}</span>
        <span>
          <Image src={threeDotsIcon} width={20} height={20} />
        </span>
      </div>
    </div>
  );
}
function SingleUserHeader({ handleFilter }) {
  return (
    <div className={Style.single_header}>
      <div className={Style.item_fourteen_first}>Last transaction</div>
      <div className={Style.item_fifteen_first}>
        <span onClick={() => handleFilter("new")}>Newest</span>
        <span onClick={() => handleFilter("old")}>Oldest</span>
      </div>
    </div>
  );
}
export default Footer;
