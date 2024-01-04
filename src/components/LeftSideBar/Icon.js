import React from 'react'
import styles from "./styles.module.css";
import { avatarIcon, chatIcon, clockIcon, contactIcon, homeIcon, logoutIcon, notificationIcon, profileIcon, settingsIcon, walletIcon } from '@/assets';
import Image from 'next/image';

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

const Icons = ({name}) => (
  <Image
    src={icon[name]}
    width={17}
    height={17}
    className={styles.navBarIcon}
    alt={name}
  />
);

export default Icons