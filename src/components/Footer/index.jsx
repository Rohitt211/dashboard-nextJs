"use client";
import React, { useState } from "react";
import "./styles.scss";
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
    const filteredList = lastTransactionList.filter(
      (item) => item.status === type
    );
    setListItem(filteredList);
  };

  return (
    <div className="footer-container">
      <div className="footer-container-single_container_first">
        {listItem.map((element, index) =>
          index == 0 ? (
            <SingleUserHeader key={index} handleFilter={handleFilter} />
          ) : (
            <SingleUserItem
              key={index}
              name={element.name}
              price={element.price}
            />
          )
        )}
      </div>
      <div className="footer-container-item_eight_first">
        <div className="footer-container-item_nine_first">
          <span>Analytics</span>
          <span>
            <Image src={threeDotsIcon} width={20} height={20} alt="image" />
          </span>
        </div>
        <div
          className="footer-container-item_ten_first"
          style={{ height: "200px" }}
        >
          <Doughnut data={DOUGHNUT_CHART_DATA.data} />
        </div>
        <div className="footer-container-item_eleven_first">
          {DOUGHNUT_CHART_DATA.status.map((element, index) => {
            return (
              <StatusIndicator
                key={index}
                name={element.name}
                color={element.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatusIndicator({ name, color }) {
  return (
    <div className="status-indicator-item_twelth_first">
      <div
        className="status-indicator-item_thirteen_first"
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
    <div className="single-user-item_fourth_first">
      <div className="single-user-item_fifth_first">
        <Image
          src={avatarIcon}
          className="single-user-item_sixth_first"
          alt="image"
        />
        <span>{name}</span>
      </div>
      <div className="single-user-item_seventh_first">
        <span>{price}</span>
        <span>
          <Image src={threeDotsIcon} width={20} height={20} alt="image" />
        </span>
      </div>
    </div>
  );
}
function SingleUserHeader({ handleFilter }) {
  return (
    <div className="single_header">
      <div className="single_header-item_fourteen_first">Last transaction</div>
      <div className="single_header-item_fifteen_first">
        <span onClick={() => handleFilter("new")}>Newest</span>
        <span onClick={() => handleFilter("old")}>Oldest</span>
      </div>
    </div>
  );
}
export default Footer;
