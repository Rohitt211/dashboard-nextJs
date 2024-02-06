"use client";
import React, { useState } from "react";
import "./styles.scss";
import Icons from "./Icon";
import { leftSectionIconsName } from "@/constants";

const SidebarIcons = ({ icons, className, handleActiveTab, activeTabName }) => (
  <div className={className}>
    {icons.map((icon) => {
      return (
        <div
          key={icon}
          className={`iconNotActive ${
            icon === activeTabName && "active"
          } ${
            icon === "chat" && activeTabName !== "chat" && "chatActiveBG"
          }`}
          onClick={() => handleActiveTab(icon)}
        >
          <Icons
            className={`${icon === activeTabName && "activeImage"}`}
            name={icon}
          />
        </div>
      );
    })}
  </div>
);

const LeftSideBar = () => {
  const [activeTabName, setActiveTabName] = useState("home");

  const handleActiveTab = (tabName) => setActiveTabName(tabName);

  return (
    <div className="sideBar">
      <h1 className="sideBar-heading">S.</h1>
      <div className="sideBar-iconsBar">
        <SidebarIcons
          activeTabName={activeTabName}
          handleActiveTab={handleActiveTab}
          icons={leftSectionIconsName.slice(0, 1)}
        />
        <SidebarIcons
          activeTabName={activeTabName}
          handleActiveTab={handleActiveTab}
          icons={leftSectionIconsName.slice(1, 7)}
          className="sideBar-middleContainer"
        />
        <SidebarIcons
          activeTabName={activeTabName}
          handleActiveTab={handleActiveTab}
          icons={leftSectionIconsName.slice(7)}
          className="sideBar-lastContainer"
        />
      </div>
    </div>
  );
};

export default LeftSideBar;
