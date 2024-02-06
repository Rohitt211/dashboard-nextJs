"use client";
import { rightArrowIcon, threeDotsIcon } from "@/assets";
import "./style.scss";
import Image from "next/image";
import Chat from "./Chat";

function ItemList() {
  return (
    <div className="itemList">
      <div className="itemList-itemListchild">
        <h5 className="itemList-itemListchild-containerheading">List of items to buy</h5>
        <div className="itemList-itemListchild-timeBox">
          <div>
            <h4>02:00</h4>
            <p className="itemList-itemListchild-timeBox-dateSat">Sat August 12</p>
          </div>
          <div className="itemList-itemListchild-timeBox-arrowImage">
            <Image src={rightArrowIcon} width={13} height={13} alt="image" />
          </div>
          <div className="itemList-itemListchild-timeBox-date2">
            <h4>05:00</h4>
            <p className="itemList-itemListchild-timeBox-date2-date">Sat September 12</p>
          </div>
        </div>

        <div className="itemList-itemListchild-listBox">
          <div>
            <p className="itemList-itemListchild-listBox-itemList">
              0/3{" "}
              <span style={{ color: "black" }}>
                <strong>Shopping List</strong>
              </span>
            </p>
          </div>
          <div className="itemList-itemListchild-listBox-addItemtext"> + Add an item</div>
        </div>

        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="itemList-itemListchild-itembox1">
              <div className="itemList-itemListchild-itembox1-itemboxcheckbox">
                <input type="checkbox" />
                <span className="itemList-itemListchild-itembox1-itemboxcheckbox-Item">Macbook</span>
              </div>
              <Image src={threeDotsIcon} width={20} height={20} alt="image" />
            </div>
            <div className="itemList-itemListchild-itembox1">
              <div className="itemList-itemListchild-itembox1-itemboxcheckbox">
                <input type="checkbox" />
                <span className="itemList-itemListchild-itembox1-itemboxcheckbox-Item">Bicycle</span>
              </div>
              <Image src={threeDotsIcon} width={20} height={20} alt="image" />
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: 10 }}>
            <div className="itemList-itemListchild-itembox1">
              <div className="itemList-itemListchild-itembox1-itemboxcheckbox">
                <input type="checkbox" />
                <span className="itemList-itemListchild-itembox1-itemboxcheckbox-Item">Motorcycle</span>
              </div>
              <Image src={threeDotsIcon} width={20} height={20} alt="image" />
            </div>
            <div className="itemList-itemListchild-itembox1">
              <div className="itemList-itemListchild-itembox1-itemboxcheckbox">
                <input type="checkbox" />
                <span className="itemList-itemListchild-itembox1-itemboxcheckbox-Item">Iphone 14 pro max</span>
              </div>
              <Image src={threeDotsIcon} width={20} height={20} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default ItemList;
