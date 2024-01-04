"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Icons from "./Icon";
import { leftSectionIconsName } from "@/constants";

const SidebarIcons = ({ icons, className, handleActiveTab, activeTabName }) => (
  <div className={className}>
    {icons.map((icon) => {
      return (
        <div
          key={icon}
          className={`${styles.iconNotActive} ${
            icon === activeTabName && styles.active
          }`}
          onClick={() => handleActiveTab(icon)}
        >
          <Icons name={icon} />
        </div>
      );
    })}
  </div>
);

const LeftSideBar = () => {
  const [activeTabName, setActiveTabName] = useState("home");

  const handleActiveTab = (tabName) => setActiveTabName(tabName);

  return (
    <div className={styles.mainContainer}>
      <h1 className="heading">S.</h1>
      <div className={styles.iconsBar}>
        <SidebarIcons
          activeTabName={activeTabName}
          handleActiveTab={handleActiveTab}
          icons={leftSectionIconsName.slice(0, 1)}
        />
        <SidebarIcons
          activeTabName={activeTabName}
          handleActiveTab={handleActiveTab}
          icons={leftSectionIconsName.slice(1, 7)}
          className={styles.middleContainer}
        />
        <SidebarIcons
          activeTabName={activeTabName}
          handleActiveTab={handleActiveTab}
          icons={leftSectionIconsName.slice(7)}
          className={styles.lastContainer}
        />
      </div>
    </div>
  );
};

export default LeftSideBar;
