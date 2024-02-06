import React from "react";
import "./styles.scss";
import {
  avatarIcon,
  chatIcon,
  clockIcon,
  contactIcon,
  homeIcon,
  logoutIcon,
  notificationIcon,
  settingsIcon,
  walletIcon,
} from "@/assets";
import Image from "next/image";

const icon = {
  chat: chatIcon,
  home: homeIcon,
  notification: notificationIcon,
  clock: clockIcon,
  contact: contactIcon,
  wallet: walletIcon,
  settings: settingsIcon,
  profile: avatarIcon,
  logout: logoutIcon,
};

const Icons = ({ name, className }) => (
  <Image
    src={icon[name]}
    width={17}
    height={17}
    className={`navBarIcon ${name !== "profile" && className}`}
    alt={name}
  />
);

export default Icons;
